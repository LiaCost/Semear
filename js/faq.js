// js/faq.js

function initFAQPage(data) {
    
    // --- Lógica de Navegação do Header (Corrigido com verificações de 'if') ---
    
    const logoLink = document.getElementById("logo-link-faq");
    if (logoLink) {
        logoLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    }
    
    const navInicio = document.getElementById("nav-inicio-faq");
    if (navInicio) {
        navInicio.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    }
    
    const navHubs = document.getElementById("nav-hubs-faq");
    if (navHubs) {
        navHubs.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });
    }
    
    const navSolo = document.getElementById("nav-solo-faq");
    if (navSolo) {
        navSolo.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/solos/solos.html'); });
    }
    
    const navLoja = document.getElementById("nav-loja-faq");
    if (navLoja) {
        navLoja.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    }
    
    // O nav-carrinho-faq não estava no HTML que você enviou, mas mantive o listener e adicionei a verificação de segurança:
    const navCarrinho = document.getElementById("nav-carrinho-faq");
    if (navCarrinho) { 
        navCarrinho.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });
    }

    // O elemento que causava o erro (nav-login-faq):
    const navLogin = document.getElementById("nav-login-faq");
    if (navLogin) { 
        navLogin.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    }

    // --- Lógica do Acordeão (FAQ) ---
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answerId = question.getAttribute("data-faq-toggle");
            const answer = document.getElementById(answerId);
            const toggleIcon = question.querySelector(".faq-toggle");
            
            const isVisible = answer.style.display === "block";

            // Fecha todos os outros itens 
            document.querySelectorAll(".faq-answer").forEach(a => { a.style.display = "none"; });
            document.querySelectorAll(".faq-toggle").forEach(t => { t.textContent = "+"; });

            if (!isVisible) {
                // Abre o item clicado
                answer.style.display = "block";
                toggleIcon.textContent = "−";
            } else {
                // Fecha o item clicado
                answer.style.display = "none";
                toggleIcon.textContent = "+";
            }
        });
    });

    // --- Lógica do Formulário de Contato (Simulação) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! Entraremos em contato.");
            contactForm.reset();
        });
    }

    // Inicializa: Abre o primeiro item ao carregar a página
    const firstQuestion = document.querySelector(".faq-question");
    if (firstQuestion) {
        // Encontra o item pai e simula o clique na pergunta (que é o listener)
        firstQuestion.click();
    }
}