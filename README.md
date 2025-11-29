<div align="center">

![Semear Logo](public/images/logo-semear.png)

**Conectando pequenos produtores de sementes nativas ao consumidor final**

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green.svg)](https://www.mongodb.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://www.mysql.com/)

</div>

📖 Sobre

O **Semear** é uma plataforma digital que nasceu da necessidade de aproximar pequenos produtores de sementes nativas do consumidor final por meio de uma solução simples, acessível e eficiente.

🎯 História do projeto

O projeto surgiu no primeiro semestre, durante a disciplina de UX, como um protótipo desenvolvido para a **Embrapa**. Inicialmente, tratava-se apenas de um design no Figma, mas ao perceber seu potencial transformador, decidimos dar vida à ideia e construir um sistema real e funcional.

🌟 Missão

Proporcionar um espaço de aprendizado acessível sobre as melhores práticas de cultivo e manejo de sementes, conectando pessoas apaixonadas pelo cultivo para construir um futuro mais verde e sustentável.

💡 Valores

- **Sustentabilidade**: Promover práticas agrícolas sustentáveis
- **Inovação**: Utilizar tecnologia para democratizar o acesso ao conhecimento
- **Acessibilidade**: Garantir que a plataforma seja intuitiva e inclusiva
- **Comunidade**: Fortalecer a conexão entre produtores e consumidores

---

✨ Funcionalidades

💠 Para usuários finais
- 🔍 **Catálogo de sementes**: Navegue por um catálogo completo de sementes nativas
- 🛒 **Sistema de compras**: Carrinho, checkout e gestão de pedidos
- ⭐ **Sistema de avaliações**: Avalie produtos e vendedores
- 📚 **Hubs educativos**: Aprenda sobre cultivo, solos e manejo de sementes
- 👤 **Gestão de conta**: Perfil personalizado e histórico de compras

💠 Para vendedores
- 📦 **Cadastro de produtos**: Registre suas sementes com fotos e descrições
- 📊 **Painel de vendas**: Acompanhe suas vendas e estoque
- 💰 **Gestão de ofertas**: Controle preços e disponibilidade

💠 Para Administradores
- 🔧 **Painel Administrativo**: Gerenciamento completo da plataforma
- 👥 **Gestão de Usuários**: Controle de cadastros e permissões
- 📈 **Relatórios**: Análise de vendas e atividades

🛠 Tecnologias

⚪ Frontend
- **HTML5** / **CSS3**: Estrutura e estilização
- **JavaScript Vanilla**: Lógica e interatividade
- **SPA (Single Page Application)**: Navegação fluida sem recarregamento

⚪ Backend
- **Node.js** (v18+): Runtime JavaScript
- **Express.js** (v5.1): Framework web
- **MySQL** (v8.0): Banco relacional para dados estruturados
- **MongoDB** (v7.0): Banco NoSQL para conteúdo flexível

⚪ Bibliotecas e dependências
```json
{
  "express": "^5.1.0",
  "body-parser": "^2.2.0",
  "mysql2": "^3.15.3",
  "mongodb": "^7.0.0",
  "cors": "^2.8.5"
}
```

📦 Instalação

🟣 Pré-requisitos

- Node.js >= 18.0.0
- MySQL >= 8.0
- MongoDB >= 7.0
- Git

🔸 Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/semear.git
cd semear
```

2. **Instale as dependências**
```bash
# Dependências do backend
cd backend
npm install

# Dependências do frontend (se aplicável)
cd ..
npm install
```

3. **Configure o MySQL**
```bash
# Crie o banco de dados
mysql -u root -p < backend/database/BB-Semear/schema.sql

# Configure as credenciais em backend/server.js
```

4. **Configure o MongoDB**
```bash
# Inicie o MongoDB
mongod

# Importe dados iniciais
mongoimport --db semear --collection plantas --file backend/database/seedmongo.json --jsonArray
```

5. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na pasta backend
cp backend/.env.example backend/.env

# Edite com suas credenciais
```

6. **Inicie o servidor**
```bash
cd backend
npm start
```

7. **Acesse a aplicação**
```
http://localhost:3000
```

---

🚀 Uso

🔻 Iniciando o servidor

```bash
cd backend
node server.js
```

O servidor estará disponível em `http://localhost:3000`

🔻 Endpoints principais

🔻 Autenticação
```http
POST /api/v1/login
POST /api/v1/usuarios/cadastro
```

🔻 Produtos
```http
POST /api/v1/plantas
GET  /api/v1/catalogo
```

🔻 Pedidos
```http
POST /api/v1/pedidos
POST /api/v1/avaliacoes
```

🔻 Conteúdo educativo
```http
GET /api/v1/conteudo?tipo=SOLO
GET /api/v1/mongo/plantas
```

---

📁 Estrutura do projeto

```
semear/
│
├── backend/                # Servidor Node.js
│   ├── controllers/        # Controladores da API
│   ├── routes/            # Rotas da aplicação
│   ├── database/          # Scripts e schemas do banco
│   ├── mongo.js           # Configuração MongoDB
│   └── server.js          # Arquivo principal do servidor
│
├── js/                    # Scripts JavaScript do frontend
│   ├── main.js            # Gerenciador de rotas SPA
│   ├── auth.js            # Autenticação
│   ├── home.js            # Página inicial
│   ├── catalogo.js        # Catálogo de produtos
│   └── ...
│
├── pages/                 # Páginas HTML + CSS
│   ├── home/
│   ├── catalogo/
│   ├── carrinho/
│   └── ...
│
├── public/                # Arquivos estáticos
│   └── images/            # Imagens e ícones
│
└── index.html             # Ponto de entrada da aplicação
```

---

🎨 Arquitetura

🤎 Frontend (SPA)
- **Navegação**: Sistema de roteamento customizado sem frameworks
- **Carregamento Dinâmico**: CSS e HTML carregados sob demanda
- **Preloader**: Transições suaves entre páginas

🤎 Backend (API REST)
- **Arquitetura em Camadas**: Separação clara de responsabilidades
- **Dual Database**: MySQL para transações + MongoDB para conteúdo
- **Pool de Conexões**: Otimização de performance

🤎 Banco de dados

🤎 MySQL - Dados estruturados
- Usuários e autenticação
- Produtos e ofertas
- Pedidos e transações
- Avaliações

🤎 MongoDB - Conteúdo flexível
- Artigos educativos
- Hubs de conhecimento
- Dados de solos e técnicas

---

🔐 Segurança

⚠️ **Nota importante**: O sistema atual armazena senhas em texto plano para fins de desenvolvimento. **Nunca use isso em produção!**

🟢 Evoluções futuras:
- [ ] Implementar hash de senhas (bcrypt)
- [ ] Adicionar tokens JWT para autenticação
- [ ] Implementar rate limiting
- [ ] Validação de entrada rigorosa
- [ ] HTTPS obrigatório

🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

💫 Diretrizes
- Siga os padrões de código existentes
- Documente novas funcionalidades
- Teste suas alterações
- Atualize o README se necessário


📝 Roadmap

- [ ] Sistema de notificações
- [ ] Chat entre vendedor e comprador
- [ ] Sistema de recomendações com IA
- [ ] App mobile (React Native)
- [ ] Integração com gateways de pagamento
- [ ] Sistema de frete calculado
- [ ] Dashboard analytics avançado
- [ ] Suporte multilíngue completo


👥 Equipe
Lia Costa
Sarah Silva
Victor de Jesus
Taís Barbosa
Andressa Castro

Este projeto foi desenvolvido com 💚 por estudantes apaixonados por tecnologia e sustentabilidade.


📄 Licença © 2025 - Todos os direitos reservados.

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Feito com 💚 por estudantes do curso de TI

</div>
