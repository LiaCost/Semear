// js/home.js

function initHomePage(data) {
    
    // --- Lógica de Navegação Padrão ---
    const loginButton = document.getElementById("login-link");
    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/login/login.html');
        });
    }
    
    const lojaLink = document.getElementById("nav-loja-link");
    if (lojaLink) {
        lojaLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/vendas/vendas.html');
        });
    }
    
    const hubsLink = document.getElementById("nav-hubs-link");
    if (hubsLink) {
        hubsLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/hubs/hubs.html');
        });
    }

    // --- MUDANÇA AQUI: LÓGICA DE CONTROLE DE PAPEL ---
    const venderLink = document.getElementById("nav-vender-link");
    const userRole = localStorage.getItem('userRole'); // Pega o papel salvo

    if (venderLink) {
        // Se o papel for 'admin' OU 'vendedor', mostra o link
        if (userRole === 'admin' || userRole === 'vendedor') {
            venderLink.style.display = 'block'; // Garante que está visível
            venderLink.addEventListener("click", (e) => {
                e.preventDefault();
                loadPage('pages/cadastro-planta/cadastro-planta.html');
            });
        } else {
            // Se for 'cliente' ou nulo (deslogado), esconde o link
            venderLink.style.display = 'none'; 
        }
    }
}