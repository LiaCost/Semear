// js/admin.js

function initAdminPage() {
    
    // --- Elementos de Navegação ---
    const navLinks = document.querySelectorAll(".admin-nav-link");
    const contentPages = document.querySelectorAll(".admin-page-section");
    const pageTitle = document.getElementById("admin-page-title");
    const logoutButton = document.getElementById("admin-sair");
    const goToCadastroBtn = document.getElementById("admin-ir-cadastro-planta");

    // --- Navegação do Menu Lateral ---
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Ignora o botão "Sair"
            if (link.id === "admin-sair") return;

            // Pega o alvo (ex: "relatorios")
            const pageId = link.getAttribute("data-page");

            // Esconde todas as páginas
            contentPages.forEach(page => {
                page.style.display = "none";
            });

            // Remove 'active' de todos os links
            navLinks.forEach(nav => {
                nav.classList.remove("active");
            });

            // Mostra a página clicada
            const targetPage = document.getElementById(`page-${pageId}`);
            if (targetPage) {
                targetPage.style.display = "block";
            }

            // Adiciona 'active' ao link clicado
            link.classList.add("active");

            // Atualiza o título da página
            pageTitle.innerText = link.innerText.replace("📊", "").replace("🌱", "").replace("👥", "").trim();
        });
    });

    // --- Botão Sair ---
    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Simula o logout e volta para a home IMEDIATAMENTE
            loadPage('pages/home/home.html');
        });
    }
    
    // --- Botão Gerenciar Produtos -> Cadastrar ---
    if (goToCadastroBtn) {
        goToCadastroBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Carrega a página de cadastro de planta
            loadPage('pages/cadastro-planta/cadastro-planta.html');
        });
    }
}