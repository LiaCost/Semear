// js/promocoes.js

function initPromocoesPage(data) {
    
    // --- Lógica de Navegação do Header ---
    document.getElementById("logo-link-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-inicio-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-catalogo-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/catalogo/catalogo.html'); });
    document.getElementById("nav-loja-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    document.getElementById("nav-carrinho-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });
    document.getElementById("nav-login-promocoes").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });


    // --- Lógica de Clique dos Detalhes (Reutiliza a lógica de Produto) ---
    const detalheLinks = document.querySelectorAll('.btn-add-to-cart'); 
    
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
}