 // js/solos.js



function initSolosPage(data) {



    // --- Lógica de Navegação do Header ---

    const logoLink = document.getElementById("logo-link-solos");

    const inicioLink = document.getElementById("nav-inicio-solos");

    const hubsLink = document.getElementById("nav-hubs-solos");

    const lojaLink = document.getElementById("nav-loja-solos");

    const carrinhoLink = document.getElementById("nav-carrinho-solos");

    const loginLink = document.getElementById("nav-login-solos");



    if (logoLink) logoLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });

    if (inicioLink) inicioLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });

    if (hubsLink) hubsLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });

    if (lojaLink) lojaLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });

    if (carrinhoLink) carrinhoLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });

    if (loginLink) loginLink.addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });

   

    // --- Lógica de Controle de Papel (Se aplicável, para o botão Vender/Cadastrar) ---

    // Você pode adicionar a lógica aqui se o menu de Solos tiver um link condicional.



    // --- Lógica de Toggle do Texto (Saiba Mais / Recolher) ---

    const buttons = document.querySelectorAll(".toggle-text");



    buttons.forEach((btn) => {

        btn.addEventListener("click", () => {

            const card = btn.closest(".card");

            const resumo = card.querySelector(".resumo");

           

            card.classList.toggle("expanded");



            // Alterna o texto do botão

            if (card.classList.contains("expanded")) {

                btn.textContent = "Recolher";

                if (resumo) resumo.style.display = "none"; // Esconde o resumo ao expandir

            } else {

                btn.textContent = "Saiba Mais";

                if (resumo) resumo.style.display = "block"; // Mostra o resumo ao recolher

            }

           

            // Rola para o topo do card (melhora a usabilidade móvel)

            card.scrollIntoView({ behavior: "smooth", block: "center" });

        });

    });

}