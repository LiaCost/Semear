// js/carrinho.js

function initCarrinhoPage() {
    
    // --- Lógica de Navegação ---
    const logoLink = document.getElementById("logo-link-carrinho");
    const homeLink = document.getElementById("nav-inicio-link-carrinho");
    const lojaLink = document.getElementById("nav-loja-link-carrinho");
    const loginLink = document.getElementById("login-link-carrinho");
    const continueShoppingLink = document.getElementById("continue-shopping-link");

    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/home/home.html');
        });
    }
    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/home/home.html');
        });
    }
    if (lojaLink) {
        lojaLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/vendas/vendas.html');
        });
    }
    if (loginLink) {
        loginLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/login/login.html');
        });
    }
    if (continueShoppingLink) {
        continueShoppingLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/vendas/vendas.html');
        });
    }

    // --- Lógica de Quantidade ---
    const qtyMinus = document.getElementById("qty-minus");
    const qtyPlus = document.getElementById("qty-plus");
    const qtyValue = document.getElementById("qty-value");

    if (qtyMinus && qtyPlus && qtyValue) {
        qtyPlus.addEventListener("click", () => {
            let currentQty = parseInt(qtyValue.innerText);
            currentQty++;
            qtyValue.innerText = currentQty;
            // TODO: Atualizar o subtotal
        });

        qtyMinus.addEventListener("click", () => {
            let currentQty = parseInt(qtyValue.innerText);
            if (currentQty > 1) { // Não permite ir abaixo de 1
                currentQty--;
                qtyValue.innerText = currentQty;
                // TODO: Atualizar o subtotal
            }
        });
    }

    const checkoutLink = document.getElementById("go-to-checkout-link");
    if (checkoutLink) {
        checkoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage('pages/checkout/checkout.html');
        });
    }
}