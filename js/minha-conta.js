// js/minha-conta.js

function initMinhaContaPage(data) { // <--- Adicionado 'data' para consistência
    
    // --- Lógica de Navegação do Header ---
    document.getElementById("logo-link-conta").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-inicio-conta").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-hubs-conta").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });
    document.getElementById("nav-loja-conta").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    document.getElementById("nav-cadastro-planta-conta").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/cadastro-planta/cadastro-planta.html'); });
    
    // --- MUDANÇA AQUI: Lógica do "Sair" (Logout) ---
    const sairButton = document.getElementById("nav-sair-conta");
    if (sairButton) {
        sairButton.addEventListener("click", (e) => { 
            e.preventDefault();
            // Limpa o papel do usuário do localStorage
            localStorage.removeItem('userRole'); 
            alert("Você foi desconectado."); // <- Podemos remover isso se quiser
            loadPage('#home'); 
        });
    }


    // --- Lógica das Abas ---
    const tabLinks = document.querySelectorAll(".account-tab-link");
    const tabContents = document.querySelectorAll(".account-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-tab");
            tabLinks.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            link.classList.add("active");
            document.getElementById(`tab-${tabId}`).classList.add("active");
        });
    });

    // --- Lógica do Formulário (Simulação) ---
    const perfilForm = document.getElementById("perfil-form");
    if (perfilForm) {
        perfilForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Podemos remover este alert também se preferir
            alert("Perfil salvo com sucesso! (Simulação)");
        });
    }
}