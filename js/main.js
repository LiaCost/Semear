// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    loadPage("pages/home/home.html"); // Carrega a home por padrão
});

/**
 * Carrega dinamicamente o CSS de uma página.
 * @param {string} url - O caminho para o arquivo CSS.
 */
function loadPageCSS(url) {
    // Primeiro, remove qualquer CSS de página antigo
    removePageCSS();

    // Cria a nova tag <link>
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    // Adiciona um atributo para sabermos que este é um CSS de página
    link.setAttribute('data-page-css', 'true'); 
    
    // Adiciona o link ao <head>
    document.head.appendChild(link);
}

/**
 * Remove todos os CSS de página (marcados com 'data-page-css')
 */
function removePageCSS() {
    const oldLinks = document.querySelectorAll('link[data-page-css="true"]');
    oldLinks.forEach(link => {
        link.remove();
    });
}

/**
 * Carrega uma página HTML no container principal '#app'
 * e carrega o CSS correspondente.
 * @param {string} url - O caminho para o arquivo HTML da página.
 * @param {object} data - Um objeto de dados opcional para passar para a página.
 */
async function loadPage(url, data = null) {
    const appContainer = document.getElementById("app");
    if (!appContainer) {
        console.error("Erro: Container #app não encontrado.");
        return;
    }

    // --- LÓGICA DE CSS ---
    const cssUrl = url.replace('.html', '.css');
    loadPageCSS(cssUrl);
    // -------------------------

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar página: ${response.statusText}`);
        }
        
       const pageHTML = await response.text();
        appContainer.innerHTML = pageHTML;

        // --- MUDANÇA AQUI: Passando (data) para TODAS as funções ---
        if (url.includes("login")) {
            initAuthForms(data); 
        } 
        else if (url.includes("home")) {
            initHomePage(data);
        }
        else if (url.includes("vendas")) {
            initVendasPage(data);
        }
        else if (url.includes("carrinho")) {
            initCarrinhoPage(data);
  S     }
        else if (url.includes("checkout")) {
            initCheckoutPage(data);
        }
        else if (url.includes("hubs")) {
            initHubsPage(data);
        }
        
        else if (url.includes("detalhe")) {
            initDetalhePage(data); // Função definida em detalhe.js
        }
     
        else if (url.includes("cadastro-planta")) {
            initCadastroPlantaPage(data);
        }
        
        // <-- CORRIGIDO: Removi a linha duplicada de "cadastro-planta"
        
        else if (url.includes("produto")) {
            initProdutoPage(data); // Função definida em produto.js
        }

        else if (url.includes("admin")) {
            initAdminPage(data);
        }
        
        // <-- ADICIONADO: A nova rota para "Minha Conta"
        else if (url.includes("minha-conta")) {
            initMinhaContaPage(data);
        }

        
    } catch (error) {
        console.error(error);
        appContainer.innerHTML = "<p>Erro ao carregar o conteúdo. Tente novamente.</p>";
    }
}
