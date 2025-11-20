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

    const faqLink = document.getElementById("nav-faq-link");
    if (faqLink) {
        faqLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/faq/faq.html');
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
    
}

document.addEventListener('DOMContentLoaded', () => {
        // 1. Seleciona o elemento que irá rolar (o container dos cards)
        const carousel = document.querySelector('.seed-carousel');
        // 2. Seleciona os botões
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

        // Largura de rolagem: Largura do card (280px) + Gap (30px) = 310px
        const scrollAmount = 310; 

        // Adiciona funcionalidade à seta da direita (Próximo)
        arrowRight.addEventListener('click', () => {
            // Rola o carrossel para a direita
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth' 
            });
        });

        // Adiciona funcionalidade à seta da esquerda (Anterior)
        arrowLeft.addEventListener('click', () => {
            // Rola o carrossel para a esquerda
            carousel.scrollBy({
                left: -scrollAmount, 
                behavior: 'smooth'
            });
        });
    });