// js/solos.js

function initSolosPage(data) {
    console.log("🚀 INICIANDO PÁGINA DE SOLOS");

    // --- Lógica de Navegação do Header ---
    const logoLink = document.getElementById("logo-link-solos");
    const inicioLink = document.getElementById("nav-inicio-solos");
    const hubsLink = document.getElementById("nav-hubs-solos");
    const lojaLink = document.getElementById("nav-loja-solos");
    const carrinhoLink = document.getElementById("nav-carrinho-solos");
    const loginLink = document.getElementById("nav-login-solos");

    if (logoLink) {
        logoLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/home/home.html'); 
        });
    }
    if (inicioLink) {
        inicioLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/home/home.html'); 
        });
    }
    if (hubsLink) {
        hubsLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/hubs/hubs.html'); 
        });
    }
    if (lojaLink) {
        lojaLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/vendas/vendas.html'); 
        });
    }
    if (carrinhoLink) {
        carrinhoLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/carrinho/carrinho.html'); 
        });
    }
    if (loginLink) {
        loginLink.addEventListener("click", (e) => { 
            e.preventDefault(); 
            loadPage('pages/login/login.html'); 
        });
    }
    
    // === SOLUÇÃO DEFINITIVA PARA OS BOTÕES ===
    console.log("🔧 Configurando botões de toggle...");
    
    // Espera um pouquinho para garantir que o DOM está pronto
    setTimeout(() => {
        const cards = document.querySelectorAll(".card");
        console.log(`📦 Encontrei ${cards.length} cards`);
        
        cards.forEach((card, index) => {
            const btn = card.querySelector(".toggle-text");
            const resumo = card.querySelector(".resumo");
            const textoExpandido = card.querySelector(".texto-expandido");
            
            if (btn) {
                console.log(`✅ Configurando card ${index + 1}`);
                
                // Remove o atributo onclick se existir
                btn.removeAttribute("onclick");
                
                // Cria uma nova função para este card específico
                btn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log(`🖱️ CLIQUE no card ${index + 1}`);
                    console.log(`📋 Classes ANTES:`, card.className);
                    
                    // Verifica o estado atual DESTE card
                    const isExpanded = card.classList.contains("expanded");
                    
                    if (isExpanded) {
                        console.log(`📦 Fechando card ${index + 1}`);
                        card.classList.remove("expanded");
                        btn.textContent = "Saiba mais";
                        if (resumo) {
                            resumo.style.display = "block";
                            resumo.style.visibility = "visible";
                        }
                        if (textoExpandido) {
                            textoExpandido.style.display = "none";
                            textoExpandido.style.visibility = "hidden";
                        }
                    } else {
                        console.log(`📂 Abrindo card ${index + 1}`);
                        card.classList.add("expanded");
                        btn.textContent = "Recolher";
                        if (resumo) {
                            resumo.style.display = "none";
                            resumo.style.visibility = "hidden";
                        }
                        if (textoExpandido) {
                            textoExpandido.style.display = "block";
                            textoExpandido.style.visibility = "visible";
                        }
                    }
                    
                    console.log(`📋 Classes DEPOIS:`, card.className);
                    
                    // Verifica TODOS os cards e mostra o estado
                    document.querySelectorAll(".card").forEach((c, i) => {
                        console.log(`🔍 Card ${i + 1} tem classe expanded?`, c.classList.contains("expanded"));
                    });
                };
            }
        });
        
        console.log("✨ Configuração concluída!");
    }, 100);
}