// server.js - API Semear pronta para Node.js
// Dependências: express, body-parser, mysql2, cors, mongodb
// Iniciar: node server.js

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cors = require("cors");
const mongo = require("./mongo"); // arquivo mongo.js

// ======================================================
// CONEXÃO COM MONGODB
// ======================================================
(async () => {
  await mongo.connect();
})();

const app = express();
const port = 3000;

// ======================================================
// POOL DE CONEXÃO MYSQL
// ======================================================
const dbConfig = {
  host: "localhost",
  user: "semear_admin",
  password: "admin_semear_123",
  database: "semear",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool;
try {
  pool = mysql.createPool(dbConfig);
  console.log("Pool de conexões MySQL criado com sucesso!");
} catch (error) {
  console.error("ERRO ao criar pool:", error.message);
  process.exit(1);
}

// ======================================================
// MIDDLEWARE
// ======================================================
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ======================================================
// ROTA DE TESTE
// ======================================================
app.get("/", (req, res) => {
  res.send("API Semear está ativa!");
});

// ======================================================
// CADASTRO DE USUÁRIO (POST /api/v1/usuarios/cadastro)
// -> Armazena senha em texto puro no campo senha_hash (conforme solicitado)
// ======================================================
app.post("/api/v1/usuarios/cadastro", async (req, res) => {
  const { email, userType, nome, senha } = req.body;

  if (!email || !userType || !nome || !senha) {
    return res
      .status(400)
      .json({
        message: "Campos obrigatórios faltando: nome, email, userType, senha.",
      });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    console.log("[CADASTRO] Tentando cadastrar:", { email, userType, nome });

    // Verifica duplicidade por email
    const [exist] = await connection.query(
      "SELECT id_usuario FROM usuarios WHERE email = ?",
      [email]
    );
    if (exist.length > 0) {
      console.log("[CADASTRO] Email já cadastrado:", email);
      return res
        .status(409)
        .json({
          message: "Email já cadastrado.",
          idUsuario: exist[0].id_usuario,
        });
    }

    // Mapeia userType para id_grupo
    const [grupos] = await connection.query(
      "SELECT id_grupo, nome_grupo FROM grupos_usuarios WHERE LOWER(nome_grupo) = ? LIMIT 1",
      [userType.toLowerCase()]
    );
    const idGrupo = grupos.length > 0 ? grupos[0].id_grupo : null;
    console.log("[CADASTRO] idGrupo encontrado:", idGrupo);

    // Tenta usar função de sequência (se existir)
    let novoIdUsuario = null;
    try {
      const [idRes] = await connection.query(
        "SELECT fn_get_next_id('usuario_seq') AS novoId"
      );
      if (idRes && idRes[0] && idRes[0].novoId) novoIdUsuario = idRes[0].novoId;
      console.log("[CADASTRO] novoIdUsuario via seq:", novoIdUsuario);
    } catch (seqErr) {
      console.log(
        "[CADASTRO] fn_get_next_id('usuario_seq') não disponível, usando AUTO_INCREMENT."
      );
      novoIdUsuario = null;
    }

    // **INSERÇÃO: grava senha em texto puro no campo senha_hash**
    let insertResult;
    if (novoIdUsuario) {
      [insertResult] = await connection.query(
        "INSERT INTO usuarios (id_usuario, nome, email, senha_hash, id_grupo, data_cadastro) VALUES (?, ?, ?, ?, ?, NOW())",
        [novoIdUsuario, nome, email, senha, idGrupo]
      );
    } else {
      [insertResult] = await connection.query(
        "INSERT INTO usuarios (nome, email, senha_hash, id_grupo, data_cadastro) VALUES (?, ?, ?, ?, NOW())",
        [nome, email, senha, idGrupo]
      );
    }

    console.log("[CADASTRO] Result INSERT:", insertResult);
    const insertedId = novoIdUsuario || insertResult.insertId;
    console.log("[CADASTRO] ID final utilizado:", insertedId);

    const [rowsAfter] = await connection.query(
      "SELECT id_usuario, nome, email, id_grupo, data_cadastro FROM usuarios WHERE id_usuario = ? OR email = ? LIMIT 1",
      [insertedId, email]
    );

    console.log("[CADASTRO] Linha recuperada após INSERT:", rowsAfter);

    if (rowsAfter.length === 0) {
      return res.status(500).json({
        message:
          "Cadastro aparentemente efetuado, mas não foi possível recuperar o registro. Verifique o banco.",
        debug: { insertResult },
      });
    }

    return res.status(201).json({
      message: "Cadastro realizado com sucesso.",
      usuario: rowsAfter[0],
    });
  } catch (error) {
    console.error(
      "ERRO no cadastro de usuário:",
      error.sqlMessage || error.message
    );
    return res.status(500).json({
      message: "Erro interno ao processar cadastro.",
      error: error.sqlMessage || error.message,
    });
  } finally {
    if (connection) connection.release();
  }
});

// ======================================================
// LOGIN (COMPARAÇÃO EM TEXTO PURO)
// ======================================================
app.post("/api/v1/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios: email e senha." });
  }

  let connection;
  try {
    connection = await pool.getConnection();

    console.log("[LOGIN] req.body:", { email, senha });

    const [rows] = await connection.query(
      "SELECT u.id_usuario, u.senha_hash, g.nome_grupo " +
        "FROM usuarios u " +
        "LEFT JOIN grupos_usuarios g ON u.id_grupo = g.id_grupo " +
        "WHERE u.email = ?",
      [email]
    );

    if (rows.length === 0) {
      console.log("[LOGIN] Usuário não encontrado:", email);
      return res.status(401).json({ message: "Email não encontrado." });
    }

    const usuario = rows[0];
    const senhaHash = usuario.senha_hash || "";

    console.log(
      "[LOGIN] senhaHash do DB (início):",
      senhaHash.toString().slice(0, 50)
    );

    // COMPARAÇÃO EM TEXTO PURO (sem bcrypt)
    if (senha !== senhaHash) {
      console.log("[LOGIN] Senha inválida.");
      return res.status(401).json({ message: "Senha incorreta." });
    }

    // Autenticação ok — retorna id e role (normaliza role)
    return res.status(200).json({
      message: "Login realizado com sucesso.",
      userId: usuario.id_usuario,
      role: usuario.nome_grupo ? usuario.nome_grupo.toLowerCase() : null,
    });
  } catch (error) {
    console.error("ERRO no login:", error.sqlMessage || error.message);
    return res
      .status(500)
      .json({
        message: "Erro interno de autenticação.",
        error: error.sqlMessage || error.message,
      });
  } finally {
    if (connection) connection.release();
  }
});
// ======================================================
// CADASTRO DE PLANTA + OFERTA + IMAGENS
// ======================================================
app.post("/api/v1/plantas", async (req, res) => {
  const {
    idVendedor,
    nomeCientifico,
    nomePopular,
    tipoSolo,
    climaIdeal,
    cuidadosBasicos,
    preco,
    estoque,
    unidadeVenda,
    imagens,
  } = req.body;

  if (!idVendedor || !nomeCientifico || !nomePopular || !preco || !estoque)
    return res.status(400).json({
      message:
        "Campos obrigatórios faltando (Vendedor, Nome científico/popular, Preço, Estoque).",
    });

  let connection;
  try {
    connection = await pool.getConnection();

    // Verificar duplicidade
    const [check] = await connection.query(
      "SELECT id_planta FROM plantas WHERE nome_cientifico = ?",
      [nomeCientifico]
    );
    if (check.length > 0) {
      return res.status(409).json({
        message: "Planta já cadastrada com este nome científico.",
        idPlantaExistente: check[0].id_planta,
      });
    }

    const [idPlantaResult] = await connection.query(
      "SELECT fn_get_next_id('planta_seq') AS novoId"
    );
    const novoIdPlanta = idPlantaResult[0].novoId;

    await connection.query(
      `INSERT INTO plantas 
       (id_planta, nome_cientifico, nome_popular, tipo_solo, clima_ideal, cuidados_basicos)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        novoIdPlanta,
        nomeCientifico,
        nomePopular,
        tipoSolo,
        climaIdeal,
        cuidadosBasicos,
      ]
    );

    const [idOfertaResult] = await connection.query(
      "SELECT fn_get_next_id('oferta_seq') AS novoIdOferta"
    );
    const novoIdOferta = idOfertaResult[0].novoIdOferta;

    await connection.query(
      `INSERT INTO ofertas 
       (id_oferta, id_vendedor, id_planta, preco, estoque, unidade_venda, data_cadastro)
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [novoIdOferta, idVendedor, novoIdPlanta, preco, estoque, unidadeVenda]
    );

    if (Array.isArray(imagens) && imagens.length > 0) {
      const sqlImagem =
        "INSERT INTO ImagemPlanta (id_planta, url, legenda, ordem) VALUES ?";
      const valuesImagem = imagens.map((img) => [
        novoIdPlanta,
        img.url,
        img.legenda || null,
        img.ordem || null,
      ]);
      await connection.query(sqlImagem, [valuesImagem]);
    }

    res.status(201).json({
      message: "Planta e oferta cadastradas com sucesso!",
      plantaId: novoIdPlanta,
      ofertaId: novoIdOferta,
    });
  } catch (error) {
    console.error("ERRO no cadastro:", error.sqlMessage || error.message);
    res.status(500).json({
      message: "Erro interno ao cadastrar planta/oferta.",
      error: error.sqlMessage || error.message,
    });
  } finally {
    if (connection) connection.release();
  }
});

// ======================================================
// LISTAR CATÁLOGO (VW_CATALOGO_LOJA)
// ======================================================
app.get("/api/v1/catalogo", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM vw_catalogo_loja");

    if (rows.length === 0)
      return res.status(204).json({ message: "Nenhuma oferta encontrada." });

    const ofertas = rows.map((row) => ({
      id: row.id_oferta,
      nomePopular: row.nome_popular,
      nomeCientifico: row.nome_cientifico,
      preco: row.preco,
      estoque: row.estoque,
      nomeVendedor: row.nome_vendedor,
      reputacao: row.reputacao_vendedor,
      notaMedia: row.nota_media,
    }));

    res.status(200).json(ofertas);
  } catch (error) {
    console.error("ERRO ao buscar catálogo:", error.message);
    res.status(500).json({ message: "Erro interno ao buscar catálogo." });
  }
});

// ======================================================
// CADASTRAR AVALIAÇÃO
// ======================================================
app.post("/api/v1/avaliacoes", async (req, res) => {
  const { idUsuario, idOferta, idPedido, nota, comentario } = req.body;

  if (!idUsuario || !idOferta || !idPedido || !nota)
    return res.status(400).json({ message: "Dados de avaliação incompletos." });

  let connection;
  try {
    connection = await pool.getConnection();

    // Verificar duplicidade
    const [avaliacaoExistente] = await connection.query(
      `SELECT id_avaliacao 
       FROM avaliacoes 
       WHERE id_usuario = ? AND id_oferta = ? AND id_pedido = ?`,
      [idUsuario, idOferta, idPedido]
    );

    if (avaliacaoExistente.length > 0) {
      return res.status(400).json({
        message: "Você já avaliou esta oferta neste pedido.",
        id: avaliacaoExistente[0].id_avaliacao,
      });
    }

    const [idAvaliacaoResult] = await connection.query(
      "SELECT fn_get_next_id('avaliacao_seq') AS novoId"
    );
    const novoIdAvaliacao = idAvaliacaoResult[0].novoId;

    await connection.query(
      `INSERT INTO avaliacoes
       (id_avaliacao, id_usuario, id_oferta, id_pedido, nota, comentario, data_avaliacao)
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [novoIdAvaliacao, idUsuario, idOferta, idPedido, nota, comentario]
    );

    res.status(201).json({
      message: "Avaliação registrada com sucesso!",
      id: novoIdAvaliacao,
    });
  } catch (error) {
    console.error(
      "ERRO ao registrar avaliação:",
      error.sqlMessage || error.message
    );
    res.status(500).json({
      message: "Erro interno ao registrar avaliação.",
      error: error.sqlMessage || error.message,
    });
  } finally {
    if (connection) connection.release();
  }
});

// ======================================================
// CRIAR PEDIDO
// ======================================================
app.post("/api/v1/pedidos", async (req, res) => {
  const { idCliente, idEndereco, itens } = req.body;

  if (!idCliente || !idEndereco || !Array.isArray(itens) || itens.length === 0)
    return res.status(400).json({
      message:
        "Campos obrigatórios: idCliente, idEndereco e itens (lista de itens).",
    });

  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    const [idPedidoResult] = await connection.query(
      "SELECT fn_get_next_id('pedido_seq') AS novoId"
    );
    const novoIdPedido = idPedidoResult[0].novoId;

    let valorTotal = 0;

    for (let item of itens) {
      const [dadosOferta] = await connection.query(
        "SELECT preco FROM ofertas WHERE id_oferta = ?",
        [item.idOferta]
      );

      if (dadosOferta.length === 0) {
        await connection.rollback();
        return res.status(404).json({
          message: `Oferta ${item.idOferta} não encontrada.`,
        });
      }

      valorTotal += Number(dadosOferta[0].preco) * Number(item.quantidade);
    }

    await connection.query(
      `INSERT INTO pedidos 
       (id_pedido, id_cliente, id_endereco, status, valor_total, data_pedido)
       VALUES (?, ?, ?, 'PENDENTE', ?, NOW())`,
      [novoIdPedido, idCliente, idEndereco, valorTotal]
    );

    const itensInsert = itens.map((i) => [
      novoIdPedido,
      i.idOferta,
      i.quantidade,
    ]);
    await connection.query(
      "INSERT INTO itens_pedido (id_pedido, id_oferta, quantidade) VALUES ?",
      [itensInsert]
    );

    await connection.commit();

    res.status(201).json({
      message: "Pedido criado com sucesso!",
      idPedido: novoIdPedido,
      valorTotal,
    });
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("ERRO ao criar pedido:", error.sqlMessage || error.message);
    res.status(500).json({
      message: "Erro interno ao criar pedido.",
      error: error.sqlMessage || error.message,
    });
  } finally {
    if (connection) connection.release();
  }
});

// ======================================================
// CONTEÚDO EDUCATIVO SIMULADO (NoSQL)
// ======================================================
app.get("/api/v1/conteudo", (req, res) => {
  const { tipo } = req.query;

  const mockData = {
    titulo: `Conteúdo de ${tipo || "Geral"}`,
    secoes: [
      {
        subtitulo: "Objetivo",
        corpo:
          "Esta rota simula busca de artigos de Hubs e Solos no MongoDB, flexível para JSON.",
      },
      {
        subtitulo: "Características",
        corpo:
          "Permite gerenciar parágrafos, listas e seções de forma flexível.",
      },
    ],
    data: new Date().toISOString(),
  };

  res.status(200).json(mockData);
});

// ======================================================
// LISTAR PLANTAS DO MONGO
// ======================================================
app.get("/api/v1/mongo/plantas", async (req, res) => {
  try {
    const dbMongo = mongo.getDb();
    const plantas = await dbMongo.collection("plantas").find().toArray();
    res.status(200).json(plantas);
  } catch (err) {
    console.error("Erro ao buscar plantas no MongoDB:", err.message);
    res.status(500).json({ message: "Erro interno no MongoDB." });
  }
});

// ======================================================
// LISTAR OFERTAS DO MONGO
// ======================================================
app.get("/api/v1/mongo/ofertas", async (req, res) => {
  try {
    const dbMongo = mongo.getDb();
    const ofertas = await dbMongo.collection("ofertas").find().toArray();
    res.status(200).json(ofertas);
  } catch (err) {
    console.error("Erro ao buscar ofertas no MongoDB:", err.message);
    res.status(500).json({ message: "Erro interno no MongoDB." });
  }
});

// ======================================================
// INICIAR SERVIDOR
// ======================================================
app.listen(port, () => {
  console.log(`\n🚀 API Semear rodando em http://localhost:${port}`);
  console.log(`Endpoints disponíveis:`);
  console.log(`- POST /api/v1/login`);
  console.log(`- POST /api/v1/plantas`);
  console.log(`- GET  /api/v1/catalogo`);
  console.log(`- POST /api/v1/avaliacoes`);
  console.log(`- POST /api/v1/pedidos`);
  console.log(`- GET  /api/v1/conteudo?tipo=SOLO`);
  console.log(`- GET  /api/v1/mongo/plantas`);
  console.log(`- GET  /api/v1/mongo/ofertas`);
});
