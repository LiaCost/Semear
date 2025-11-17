/**
 * Inicializa os eventos dos formulários de login, cadastro e "esqueceu senha".
 * Esta função é chamada pelo main.js DEPOIS que login.html é carregado.
 */
function initAuthForms() {
    // --- Seleciona os 3 Formulários ---
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const forgotForm = document.getElementById("forgot-form"); // NOVO

    // --- Seleciona os 4 Links de Navegação ---
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");
    const showForgotLink = document.getElementById("show-forgot"); // NOVO
    const showLoginFromForgotLink = document.getElementById("show-login-from-forgot"); // NOVO

    // --- Funções de Exibição ---
    function showLogin() {
        loginForm.style.display = "flex"; // Usar 'flex' por causa do .form-wrapper
        registerForm.style.display = "none";
        forgotForm.style.display = "none";
    }

    function showRegister() {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
        forgotForm.style.display = "none";
    }

    function showForgot() {
        loginForm.style.display = "none";
        registerForm.style.display = "none";
        forgotForm.style.display = "flex";
    }

    // --- Event Listeners dos Links ---
    
    // "Inscrever-se" (no form de login)
    showRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        showRegister();
    });

    // "Fazer Login" (no form de cadastro)
    showLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLogin();
    });

    // "Esqueceu a senha?" (no form de login)
    showForgotLink.addEventListener("click", (e) => {
        e.preventDefault();
        showForgot();
    });

    // "Fazer Login" (no form de esqueceu senha)
    showLoginFromForgotLink.addEventListener("click", (e) => {
        e.preventDefault();
        showLogin();
    });

    // --- Lógica de Submit dos Formulários ---

    /**
     * Função auxiliar para mostrar mensagens de erro/sucesso no login
     * @param {string} message - A mensagem a ser exibida.
     * @param {string} type - 'success' ou 'error'.
     */
    function showLoginMessage(message, type) {
        const messageArea = document.getElementById("login-message-area");
        if (messageArea) {
            messageArea.innerText = message;
            messageArea.className = type; // Define a classe como 'success' ou 'error'
        }
    }

   // --- Lógica de Submit ---
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("login-email").value;
        const pass = document.getElementById("login-pass").value;

        // Limpa mensagens antigas
        const messageArea = document.getElementById("login-message-area");
        if (messageArea) {
            messageArea.style.display = "none";
            messageArea.innerText = "";
        }

        console.log("Tentativa de Login:", { email, pass });
        
        // ===========================================
        // --- MUDANÇA AQUI: LÓGICA DE LOGIN COM PAPEIS ---
        // ===========================================
        
        // 1. Login de Admin
        if (email.toLowerCase() === "admin@semear.com" && pass === "admin") {
            // Salva o papel no localStorage
            localStorage.setItem('userRole', 'admin'); 
            
            showLoginMessage("Login de Administrador bem-sucedido! Redirecionando...", "success");
            setTimeout(() => {
                loadPage('pages/admin/admin.html');
            }, 1500);
        
        // 2. Login de Vendedor (NOVO)
        } else if (email.toLowerCase() === "vendedor@semear.com" && pass === "vendedor") {
            // Salva o papel no localStorage
            localStorage.setItem('userRole', 'vendedor');

            showLoginMessage("Login de Vendedor bem-sucedido! Bem-vindo.", "success");
            setTimeout(() => {
                loadPage('pages/home/home.html');
            }, 1500);

        // 3. Login de Cliente (user@semear.com)
        } else if (email.toLowerCase() === "user@semear.com" && pass === "user") {
            // Salva o papel no localStorage
            localStorage.setItem('userRole', 'cliente');

            showLoginMessage("Login bem-sucedido! Bem-vindo de volta.", "success");
            setTimeout(() => {
                loadPage('pages/home/home.html');
            }, 1500);

        // 4. Login Falho
        } else {
            localStorage.removeItem('userRole'); // Garante que não há papel salvo
            showLoginMessage("Email ou senha inválidos. Tente novamente.", "error");
        }
        // ===========================================
        // --- FIM DA MUDANÇA ---
        // ===========================================
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("reg-name").value;
        const email = document.getElementById("reg-email").value;
        const pass = document.getElementById("reg-pass").value;
        const userType = document.querySelector('input[name="userType"]:checked').value;

        console.log("Tentativa de Cadastro:", { nome, email, pass, userType });

        // TODO: Enviar dados para o backend (API)
    });

    // NOVO: Submit do "Esqueceu Senha"
    forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("forgot-email").value;
        
        console.log("Pedido de Recuperação de Senha:", { email });

        // TODO: Enviar email para o backend (API)
        alert("Um link de recuperação foi enviado para o seu email (se ele estiver cadastrado).");
        showLogin(); // Volta para o login
    });
}