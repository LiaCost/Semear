function initHubsPage() {
    
    // --- Lógica de Navegação ---
    // (IDs do seu hubs.html)
    const homeLink = document.getElementById("nav-inicio-hubs");
    const homeLink2 = document.getElementById("nav-inicio-hubs-2");
    const logoLink = document.getElementById("logo-link-hubs");
    const lojaLink = document.getElementById("nav-loja-hubs");
    const loginLink = document.getElementById("nav-login-hubs");
    const cartLink = document.getElementById("nav-carrinho-hubs");

    if (homeLink) homeLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    if (homeLink2) homeLink2.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    if (logoLink) logoLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    if (lojaLink) lojaLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    if (loginLink) loginLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    if (cartLink) cartLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });

    // --- Lógica do Filtro de Categoria ---
    // (Movida do seu <script> original)
    const select = document.getElementById("categoriaSelect");
    const flores = document.getElementById("flores-container");
    const frutas = document.getElementById("frutas-container");

    if (select && flores && frutas) {
        select.addEventListener("change", () => {
            if (select.value === "flores") {
                flores.style.display = "flex";
                frutas.style.display = "none";
            } else {
                flores.style.display = "none";
                frutas.style.display = "flex";
            }
        });
    }

    const botoesDetalhe = document.querySelectorAll('.btn-detalhe');
    botoesDetalhe.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            const seedId = e.currentTarget.getAttribute('data-id');
            
            // Chama o loadPage com a URL do molde E os dados da semente
            loadPage('pages/detalhe/detalhe.html', { id: seedId });
        });
    });
}