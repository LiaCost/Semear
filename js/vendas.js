// js/vendas.js

function initVendasPage(data) {
    
    // --- Lógica de Navegação do Header ---
    const loginButton = document.getElementById("login-link-vendas");
    const homeLink = document.getElementById("nav-inicio-link"); // ID no HTML da Home
    const lojaLink = document.getElementById("nav-loja-catalogo"); // ID no HTML da Loja
    const cartLink = document.getElementById("cart-link-vendas");
    const logoLink = document.getElementById("home-link-vendas"); // ID no logo
    const promocoesLink = document.getElementById("nav-promocoes-link");
    // --- MUDANÇA AQUI: Adicionado o link para Catálogo ---
    const catalogoLink = document.getElementById("nav-catalogo-link");
    // ----------------------------------------------------


    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/login/login.html');
        });
    }
    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/home/home.html');
        });
    }
    // O link da loja (Loja) não faz nada se já estivermos na página, 
    // mas se fosse um link na Home ou em outro lugar...
    
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/home/home.html');
        });
    }

    if (cartLink) {
        cartLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/carrinho/carrinho.html');
        });
    }

    // --- NOVO LISTENER ---
    if (catalogoLink) {
        catalogoLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/catalogo/catalogo.html');
        });
    }
    // ----------------------
    if (promocoesLink) {
        promocoesLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/promocoes/promocoes.html');
        });
    }

    if (lojaLink) {
        lojaLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/vendas/vendas.html');
        });
    }

    // --- Lógica de Clique nos Cards para Detalhes do Produto ---
    const cardsDeProduto = document.querySelectorAll('.card-clicavel');
    cardsDeProduto.forEach(card => {
        card.addEventListener('click', (e) => {
            // Impede que o clique no botão "Adicionar ao carrinho" carregue a página
            if (e.target.classList.contains('btn-add-to-cart')) {
    e.preventDefault();

    const produto = {
        idOferta: card.getAttribute("data-id"),
        nome: card.getAttribute("data-nome"),
        preco: parseFloat(card.getAttribute("data-preco")),
        imagem: card.getAttribute("data-img")
    };

    adicionarAoCarrinho(produto);
    return;
}

            e.preventDefault();
            const produtoId = card.getAttribute('data-id');
            loadPage('pages/produto/produto.html', { id: produtoId });
        });
    });

    // --- Lógica de Filtragem ---
    const filtroSelect = document.getElementById('categoria-filtro');
    
    // IDs das áreas de conteúdo que queremos controlar
    const favoritosSection = document.getElementById('favoritos-section');
    const sementesContainer = document.getElementById('sementes-container');
    const hortalicasCarousel = document.getElementById('hortalicas-carousel');
    const frutasCarousel = document.getElementById('frutas-carousel'); 

    if (filtroSelect) {
        filtroSelect.addEventListener('change', () => {
            const categoria = filtroSelect.value;
            
            // Lógica de filtragem: Esconder/Mostrar o carrossel apropriado
            if (categoria === 'todos') {
                favoritosSection.style.display = 'block';
                hortalicasCarousel.style.display = 'flex'; 
                frutasCarousel.style.display = 'none';
            } else if (categoria === 'hortalicas') {
                favoritosSection.style.display = 'none'; 
                hortalicasCarousel.style.display = 'flex';
                frutasCarousel.style.display = 'none';
            } else if (categoria === 'frutas') {
                favoritosSection.style.display = 'none';
                hortalicasCarousel.style.display = 'none';
                frutasCarousel.style.display = 'flex';
            }
        });
    }

    // TODO: Adicionar lógica para o carrossel de produtos e filtros
}

// ==============================================
//  FUNÇÕES OFICIAIS DO CARRINHO
// ==============================================

// Recupera o carrinho salvo
function getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

// Salva carrinho
function saveCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Adiciona um item ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = getCarrinho();

    // Verifica se item já existe
    const existente = carrinho.find(item => item.idOferta === produto.idOferta);

    if (existente) {
        existente.quantidade += 1;
    } else {
        carrinho.push({
            idOferta: produto.idOferta,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1,
            imagem: produto.imagem || null
        });
    }

    saveCarrinho(carrinho);

    alert("Produto adicionado ao carrinho!");
}
