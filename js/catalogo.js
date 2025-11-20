// js/catalogo.js

function initCatalogoPage(data) {
    
    // --- 1. Lógica de Navegação do Header ---
    document.getElementById("logo-link-catalogo").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-inicio-catalogo").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-loja-catalogo").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    document.getElementById("nav-carrinho-catalogo").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });
    document.getElementById("nav-login-catalogo").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    document.getElementById("nav-promocoes-link").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/promocoes/promocoes.html'); });


    // --- 2. Lógica dos Botões "Ver Detalhes" (Redirecionamento para Produto) ---
    const detalheLinks = document.querySelectorAll('.btn-add-to-cart'); // Reutilizando a classe
    
    detalheLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const produtoId = link.getAttribute('data-id');
            
            if (produtoId) {
                // Navega para a página de detalhe do produto, passando o ID
                loadPage('pages/produto/produto.html', { id: produtoId });
            }
        });
    });

    // TODO: Implementar a lógica de filtragem da página (Seção 1, 2, 3)
}