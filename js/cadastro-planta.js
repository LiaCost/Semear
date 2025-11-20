// js/cadastro-planta.js

function initCadastroPlantaPage(data) { // <--- Adicionado 'data' para consistência
    
    // --- Lógica de Navegação ---
    const logoLink = document.getElementById("logo-link-cadastro");
    const homeLink = document.getElementById("nav-inicio-cadastro");
    const hubsLink = document.getElementById("nav-hubs-cadastro");
    const lojaLink = document.getElementById("nav-loja-cadastro");
    const loginLink = document.getElementById("login-link-cadastro");
    const soloLink = document.getElementById("nav-solo-link");

    if (logoLink) logoLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    if (homeLink) homeLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    if (hubsLink) hubsLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });
    if (lojaLink) lojaLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    if (loginLink) loginLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    if (soloLink) soloLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/solos/solos.html'); });
    

    // --- Lógica do Formulário ---
    const form = document.getElementById("cadastro-planta-form");
    const imageInput = document.getElementById("planta-imagem");
    const previewImg = document.getElementById("image-preview-img");
    const previewText = document.getElementById("image-preview-text");

    // Pré-visualização da imagem
    if (imageInput) {
        imageInput.addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                previewText.style.display = "none";
                previewImg.style.display = "block";

                reader.addEventListener("load", function() {
                    previewImg.setAttribute("src", this.result);
                });
                reader.readAsDataURL(file);
            } else {
                previewText.style.display = "block";
                previewImg.style.display = "none";
                previewImg.setAttribute("src", "");
            }
        });
    }

    // Captura dos dados ao enviar
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 
            const formData = new FormData(this);
            const dadosDaPlanta = Object.fromEntries(formData.entries());
            
            console.log("--- DADOS DA NOVA PLANTA ---");
            console.log(dadosDaPlanta);
            
            this.reset();
            previewText.style.display = "block";
            previewImg.style.display = "none";
            previewImg.setAttribute("src", "");
        });
    }

    // --- Lógica do link "Minha Conta" ---
    const contaLink = document.getElementById("nav-minha-conta-cadastro");
    if (contaLink) {
        contaLink.addEventListener("click", (e) => {
            e.preventDefault();
            
            loadPage('pages/minha-conta/minha-conta.html');
        });
    }
}
