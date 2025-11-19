// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    loadPage("pages/home/home.html"); // Carrega a home por padrão
});

// --- FUNÇÕES DE PRELOADER ---
function showPreloader() {
    const preloader = document.getElementById("preloader");
    if(preloader) preloader.classList.add("preloader-visible");
}

function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if(preloader) {
        // MUDANÇA: De 300ms para 100ms (transição mais rápida)
        setTimeout(() => {
            preloader.classList.remove("preloader-visible");
        }, 100); 
    }
}

/**
 * MUDANÇA: Adiciona o novo CSS SEM remover o antigo imediatamente.
 * Isso evita o "pisca" de conteúdo sem estilo.
 */
function loadPageCSS(url) {
    return new Promise((resolve, reject) => {
        // Verifica se esse CSS já está na página para não carregar duplicado
        const existingLink = document.querySelector(`link[href="${url}"]`);
        if (existingLink) {
            resolve();
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.setAttribute('data-page-css', 'true'); // Marca como CSS de página
        
        link.onload = () => resolve();
        link.onerror = () => reject(); // Se falhar, resolve mesmo assim para não travar o site

        document.head.appendChild(link);
    });
}

/**
 * MUDANÇA: Remove todos os CSS de página EXCETO o que acabamos de carregar.
 * @param {string} activeUrl - A URL do CSS que deve ficar.
 */
function cleanupOldCSS(activeUrl) {
    const allLinks = document.querySelectorAll('link[data-page-css="true"]');
    allLinks.forEach(link => {
        // Se o link não for o atual, remove
        if (!link.href.includes(activeUrl)) {
            link.remove();
        }
    });
}

/**
 * Função Principal de Carregamento
 */
async function loadPage(url, data = null) {
    const appContainer = document.getElementById("app");
    if (!appContainer) return;

    // 1. Mostra o Preloader
    showPreloader();

    // MUDANÇA: Pequena pausa (200ms) para garantir que o preloader cobriu a tela
    // antes de começarmos a destruir o layout antigo.
    // MUDANÇA: De 200ms para 50ms (quase instantâneo, só para dar tempo do navegador piscar)
    await new Promise(r => setTimeout(r, 50));

    try {
        const cssUrl = url.replace('.html', '.css');

        // 2. Carrega recursos em paralelo (HTML novo + CSS novo)
        // O CSS antigo AINDA ESTÁ LÁ, então a tela não fica branca/feia por trás do preloader.
        const [htmlResponse] = await Promise.all([
            fetch(url),
            loadPageCSS(cssUrl) // Carrega o novo estilo
        ]);

        if (!htmlResponse.ok) throw new Error("Erro ao carregar HTML");
        const pageHTML = await htmlResponse.text();

        // 3. Troca o HTML
        appContainer.innerHTML = pageHTML;
        
        // 4. Agora que o novo HTML e novo CSS estão prontos, removemos o CSS antigo
        cleanupOldCSS(cssUrl);

        // 5. Inicializa os scripts da página
        if (url.includes("login")) initAuthForms(data); 
        else if (url.includes("home")) initHomePage(data);
        else if (url.includes("vendas")) initVendasPage(data);
        else if (url.includes("carrinho")) initCarrinhoPage(data);
        else if (url.includes("checkout")) initCheckoutPage(data);
        else if (url.includes("hubs")) initHubsPage(data);
        else if (url.includes("detalhe")) initDetalhePage(data);
        else if (url.includes("cadastro-planta")) initCadastroPlantaPage(data);
        else if (url.includes("produto")) initProdutoPage(data);
        else if (url.includes("admin")) initAdminPage(data);
        else if (url.includes("minha-conta")) initMinhaContaPage(data);
        else if (url.includes("solos")) initSolosPage(data);
        else if (url.includes("catalogo")) initCatalogoPage(data);
    


    } catch (error) {
        console.error(error);
        appContainer.innerHTML = "<p>Erro ao carregar. Tente novamente.</p>";
    } finally {
        // 6. Esconde o Preloader
        hidePreloader();
    }
}
