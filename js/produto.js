// js/produto.js

function initProdutoPage(data) {
    const produtoId = data.id;
    const produto = PRODUTO_DATA[produtoId];

    if (!produto) {
        console.error("Dados do produto não encontrados!", produtoId);
        MapsTo('#vendas');
        return;
    }

    // --- 1. Preencher Informações do Produto ---
    document.getElementById('produto-imagem').src = produto.imagem;
    document.getElementById('produto-imagem').alt = produto.titulo;
    document.getElementById('produto-titulo').innerText = produto.titulo;
    document.getElementById('produto-descricao').innerText = produto.descricao;
    document.getElementById('produto-preco').innerText = produto.preco;

    // --- 2. Preencher Avaliações Existentes ---
    const lista = document.getElementById('avaliacoes-lista');
    lista.innerHTML = ""; // Limpar
    
    if (produto.avaliacoes.length === 0) {
        lista.innerHTML = '<p style="color: #888; font-style: italic;">Nenhuma avaliação para este produto ainda. Seja o primeiro!</p>';
    } else {
        produto.avaliacoes.forEach(aval => {
            const item = document.createElement('div');
            item.className = 'avaliacao-item';
            
            let estrelasHtml = '';
            for (let i = 0; i < 5; i++) {
                estrelasHtml += (i < aval.nota) ? '&#9733;' : '&#9734;'; // Cheia ou Vazia
            }

            item.innerHTML = `
                <div class="avaliacao-header">
                    <span class="avaliacao-nome">${aval.nome}</span>
                    <div class="avaliacao-estrelas">${estrelasHtml}</div>
                </div>
                <p class="avaliacao-comentario">${aval.comentario}</p>
            `;
            lista.appendChild(item);
        });
    }

    // --- 3. Lógica do Formulário de Avaliação (Estrelas) ---
    const estrelas = document.querySelectorAll('.estrelas-input span');
    const notaInput = document.getElementById('avaliacao-nota');

    estrelas.forEach(estrela => {
        estrela.addEventListener('click', () => {
            const valor = estrela.getAttribute('data-value');
            notaInput.value = valor; // Salva o valor no input escondido
            
            estrelas.forEach(s => {
                s.classList.remove('selecionada');
                s.innerHTML = '&#9734;'; // Vazia
            });

            for (let i = 0; i < valor; i++) {
                estrelas[i].classList.add('selecionada');
                estrelas[i].innerHTML = '&#9733;'; // Cheia
            }
        });
    });

    // --- 4. Lógica de Envio do Formulário ---
    const form = document.getElementById('avaliacao-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const novaAvaliacao = {
            nome: document.getElementById('avaliacao-nome').value,
            nota: parseInt(notaInput.value),
            comentario: document.getElementById('avaliacao-comentario').value
        };

        // Adiciona a nova avaliação ao "banco de dados" (simulação)
        produto.avaliacoes.push(novaAvaliacao);
        
        // Limpa o formulário
        form.reset();
        estrelas.forEach(s => {
            s.classList.remove('selecionada');
            s.innerHTML = '&#9734;';
        });
        notaInput.value = "0";

        // Recarrega a página de produto para mostrar a nova avaliação
        // Em um sistema real, você só atualizaria a lista de avaliações
        alert("Avaliação enviada com sucesso!");
        MapsTo('#produto', { id: produtoId })
    });

    // --- 5. Lógica de Navegação do Header ---
    document.getElementById("logo-link-produto").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-inicio-produto").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-loja-produto").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    document.getElementById("nav-carrinho-produto").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });
    document.getElementById("nav-login-produto").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    
    // TODO: Adicionar lógica de quantidade e "Adicionar ao Carrinho"
}