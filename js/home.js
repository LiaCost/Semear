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

    // --- Listener para o botão "Veja todos os hubs" ---
    const vejaHubsLink = document.getElementById("home-veja-hubs-link");
    if (vejaHubsLink) {
        vejaHubsLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/hubs/hubs.html'); // Carrega a página de hubs
        });
    }

    const soloLink = document.getElementById("nav-solo-link");
    if (soloLink) {
        soloLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/solos/solos.html');
        });
    }
    // --- FIM LISTENER --

    // --- Lógica de Controle de Papel (Mostrar/Esconder "Vender") ---
    const venderLi = document.getElementById("nav-vender-li"); 
    const venderLink = document.getElementById("nav-vender-link");
    const userRole = localStorage.getItem('userRole'); 

    if (venderLi && venderLink) {
        if (userRole === 'admin' || userRole === 'vendedor') {
            venderLi.style.display = 'list-item'; 
        } else {
            venderLi.style.display = 'none';
        }

        venderLink.addEventListener("click", (e) => {
            e.preventDefault();
            
            const currentRole = localStorage.getItem('userRole');
            if (currentRole === 'admin' || currentRole === 'vendedor') {
                loadPage('pages/cadastro-planta/cadastro-planta.html');
            }
        });
    }
    
    // --- Lógica do Seletor de Idioma (se você a manteve) ---
    const btnPT = document.getElementById("lang-pt");
    const btnEN = document.getElementById("lang-en");

    if (btnPT) {
        btnPT.addEventListener("click", (e) => {
            e.preventDefault();
            // setLanguage('pt'); // Função do i18n.js (atualmente desabilitada)
        });
    }
    if (btnEN) {
        btnEN.addEventListener("click", (e) => {
            e.preventDefault();
            // setLanguage('en'); // Função do i18n.js (atualmente desabilitada)
        });
    }
}