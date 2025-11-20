/**
 * URL Base da API (Backend Node.js)
 */
const API_BASE_URL = 'http://localhost:3000/api/v1';


/**
 * Função auxiliar para mostrar o Modal de Status.
 */
function showStatusModal(title, message, isSuccess, callback) {
    const modalOverlay = document.getElementById('status-modal');
    const modalContent = modalOverlay.querySelector('.modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = modalOverlay.querySelector('.modal-close-btn');

    modalTitle.innerText = title;
    modalMessage.innerText = message;

    // Aplica classes de cor e status
    modalContent.className = 'modal-content';
    modalContent.classList.add(isSuccess ? 'success' : 'error');
    modalCloseBtn.style.backgroundColor = isSuccess ? '#5CA773' : '#FF8A8A';

    // Exibe o modal
    modalOverlay.style.display = 'flex';

    // Garante que o botão feche o modal
    const closeHandler = () => {
        modalOverlay.style.display = 'none';
        modalCloseBtn.removeEventListener('click', closeHandler);
        if (callback) callback();
    };
    modalCloseBtn.addEventListener('click', closeHandler);
}


/**
 * Inicializa os eventos dos formulários de login, cadastro e "esqueceu senha".
 */
function initAuthForms() {
    // --- Seleciona Elementos ---
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const forgotForm = document.getElementById("forgot-form");
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");
    const showForgotLink = document.getElementById("show-forgot");
    const showLoginFromForgotLink = document.getElementById("show-login-from-forgot");

    // --- Funções de Exibição ---
    function showLogin() {
        loginForm.style.display = "flex";
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

    // --- Event Listeners de Troca de Formulário ---
    showRegisterLink.addEventListener("click", (e) => { e.preventDefault(); showRegister(); });
    showLoginLink.addEventListener("click", (e) => { e.preventDefault(); showLogin(); });
    showForgotLink.addEventListener("click", (e) => { e.preventDefault(); showForgot(); });
    showLoginFromForgotLink.addEventListener("click", (e) => { e.preventDefault(); showLogin(); });


    // ==============================================================
    // 1. LÓGICA DE LOGIN (Conectado à API)
    // ==============================================================
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("login-email").value;
        const senha = document.getElementById("login-pass").value;

        // Limpa a área de mensagem
        const messageArea = document.getElementById("login-message-area");
        if (messageArea) messageArea.style.display = "none";

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();

            if (response.ok && data.role) {
                // SUCESSO: Salva os dados de autenticação e redireciona
                localStorage.setItem('userRole', data.role);
                localStorage.setItem('userId', data.userId); 
                
                showStatusModal(
                    'Login Efetuado', 
                    `Bem-vindo(a)! Seu papel é: ${data.role.toUpperCase()}.`, 
                    true,
                    () => {
                        if (data.role === 'administrador') {
                            loadPage('pages/admin/admin.html');
                        } else {
                            loadPage('pages/home/home.html');
                        }
                    }
                );
            } else {
                // FALHA (401 - Credenciais Inválidas)
                showStatusModal(
                    'Falha na Autenticação', 
                    'Email ou senha inválidos. Tente novamente.', 
                    false
                );
            }

        } catch (error) {
            console.error("Erro na conexão com a API:", error);
            showStatusModal(
                'Erro de Conexão', 
                'Não foi possível conectar ao servidor. Verifique se a API está rodando.', 
                false
            );
        }
    });

    
    // ==============================================================
    // 2. LÓGICA DE CADASTRO (Simulação)
    // ==============================================================
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("reg-email").value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        
        // Simulação de Cadastro BEM-SUCEDIDO
        // Em um sistema real, você chamaria a rota POST /api/v1/usuarios/cadastro aqui
        
        showStatusModal(
            'Cadastro em Análise', 
            `Obrigado! Seu cadastro como ${userType.toUpperCase()} para o email ${email} foi enviado para análise.`, 
            true,
            () => showLogin() // Volta para a tela de Login após fechar o modal
        );
    });

    
    // ==============================================================
    // 3. LÓGICA DE RECUPERAÇÃO DE SENHA (Simulação)
    // ==============================================================
    forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("forgot-email").value;
        
        // Simulação de Envio BEM-SUCEDIDO
        // Em um sistema real, você chamaria a rota POST /api/v1/recuperar-senha
        
        showStatusModal(
            'Link Enviado!', 
            `Se ${email} estiver cadastrado, você receberá um link de recuperação em breve.`, 
            true,
            () => showLogin() // Volta para a tela de Login após fechar o modal
        );
    });
}