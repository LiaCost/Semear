// js/detalhe.js

function initDetalhePage(data) {
    // 1. Pega o ID da semente (ex: "melancia")
    const seedId = data.id;

    // 2. Busca os dados no nosso "banco de dados" (HUB_DATA do data.js)
    const seedInfo = HUB_DATA[seedId];

    // 3. Verifica se a semente existe
    if (!seedInfo) {
        console.error("Dados da semente não encontrados!", seedId);
        loadPage('pages/hubs/hubs.html');
        return;
    }

    // 4. Preenche o "molde" HTML com os dados
    document.getElementById('detalhe-titulo').innerText = seedInfo.titulo;
    document.getElementById('detalhe-imagem').src = seedInfo.imagem;
    document.getElementById('detalhe-imagem').alt = seedInfo.titulo;
    
    // MUDANÇA: Preenche os múltiplos parágrafos da descrição
    const descContainer = document.getElementById('detalhe-descricao-longa');
    descContainer.innerHTML = ""; // Limpa parágrafos antigos
    seedInfo.descricao_longa.forEach(paragraphText => {
        const p = document.createElement('p');
        p.innerText = paragraphText;
        descContainer.appendChild(p);
    });

    // 5. Preenche as listas de benefícios e malefícios
    const beneficiosList = document.getElementById('detalhe-beneficios');
    beneficiosList.innerHTML = ""; // Limpa a lista
    seedInfo.beneficios.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        beneficiosList.appendChild(li);
    });

    const maleficiosList = document.getElementById('detalhe-maleficios');
    maleficiosList.innerHTML = ""; // Limpa a lista
    seedInfo.maleficios.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        maleficiosList.appendChild(li);
    });

    // 6. Adiciona navegação (links do header e botão "Voltar")
    document.getElementById("nav-inicio-detalhe").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-inicio-detalhe-2").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/home/home.html'); });
    document.getElementById("nav-hubs-detalhe").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });
    document.getElementById("nav-loja-detalhe").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/vendas/vendas.html'); });
    document.getElementById("nav-carrinho-detalhe").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/carrinho/carrinho.html'); });
    document.getElementById("nav-login-detalhe").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/login/login.html'); });
    document.getElementById("voltar-hubs").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/hubs/hubs.html'); });
    document.getElementById("nav-solo-link").addEventListener("click", (e) => { e.preventDefault(); loadPage('pages/solos/solos.html'); });
}