// js/vendas.js

function initVendasPage() {
    // Esta função será chamada pelo main.js quando a página de vendas for carregada
    
    // Pega o botão "Entrar" do header
    const loginButton = document.getElementById("login-link-vendas");
    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/login/login.html'); // Carrega a página de login
        });
    }

    // Pega o link "Início" do header
    const homeLink = document.getElementById("nav-inicio-link");
    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/home/home.html'); // Carrega a página inicial
        });
    }
    
    // Pega o link do LOGO para voltar à home
    const logoLink = document.getElementById("home-link-vendas");
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            MapsTo('#home'); // Carrega a página inicial
        });
    }

    // Pega o link "Loja" do header
    const cartLink = document.getElementById("cart-link-vendas");
    if (cartLink) {
        cartLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/carrinho/carrinho.html');
        });
    }

    const cardsDeProduto = document.querySelectorAll('.card-clicavel');
    cardsDeProduto.forEach(card => {
        card.addEventListener('click', (e) => {
            // Impede que o clique no botão "Adicionar ao carrinho" carregue a página
            if (e.target.classList.contains('btn-add-to-cart')) {
                e.preventDefault();
                console.log("Adicionado ao carrinho (lógica a ser implementada)");
                return;
            }

            e.preventDefault();
            const produtoId = card.getAttribute('data-id');
            loadPage('pages/produto/produto.html', { id: produtoId });
        });
    });
    // TODO: Adicionar lógica para o carrossel de produtos e filtros
}