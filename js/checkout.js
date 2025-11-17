// js/checkout.js

function initCheckoutPage() {
    
    // --- Lógica de Navegação ---
    const logoLink = document.getElementById("logo-link-checkout");
    const homeLink = document.getElementById("nav-inicio-link-checkout");
    const lojaLink = document.getElementById("nav-loja-link-checkout");
    const carrinhoLink = document.getElementById("nav-carrinho-link-checkout");
    const loginLink = document.getElementById("login-link-checkout");

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

    // --- Lógica de Pagamento ---
    const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
    const creditCardFields = document.getElementById('credit-card-fields');
    const pixFields = document.getElementById('pix-fields');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'pix') {
                creditCardFields.style.display = 'none';
                pixFields.style.display = 'block';
            } else {
                creditCardFields.style.display = 'block';
                pixFields.style.display = 'none';
            }
        });
    });

    // --- Lógica de Finalizar Pedido ---
    const placeOrderBtn = document.getElementById("place-order-btn");
    if(placeOrderBtn) {
        placeOrderBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Aqui você validaria os formulários
            alert("Pedido finalizado com sucesso! (Simulação)");
            // Limpa o carrinho (lógica futura) e volta para a home
            loadPage('pages/home/home.html');
        });
    }
}