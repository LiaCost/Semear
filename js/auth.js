/**
 * URL Base da API (Backend Node.js)
 */
const API_BASE_URL = "http://localhost:3000/api/v1";

/**
 * Função auxiliar para mostrar o Modal de Status.
 */
function showStatusModal(title, message, isSuccess, callback) {
  const modalOverlay = document.getElementById("status-modal");
  if (!modalOverlay) {
    console.warn("Modal de status não encontrado no DOM.");
    if (callback) callback();
    return;
  }

  const modalContent = modalOverlay.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  const modalCloseBtn = modalOverlay.querySelector(".modal-close-btn");

  if (!modalContent || !modalTitle || !modalMessage || !modalCloseBtn) {
    console.warn("Estrutura do modal incompleta.");
    if (callback) callback();
    return;
  }

  modalTitle.innerText = title;
  modalMessage.innerText = message;

  // Aplica classes de cor e status
  modalContent.className = "modal-content";
  modalContent.classList.add(isSuccess ? "success" : "error");
  modalCloseBtn.style.backgroundColor = isSuccess ? "#5CA773" : "#FF8A8A";

  // Exibe o modal
  modalOverlay.style.display = "flex";

  // Garante que o botão feche o modal
  const closeHandler = () => {
    modalOverlay.style.display = "none";
    modalCloseBtn.removeEventListener("click", closeHandler);
    if (callback) callback();
  };

  // Remove listeners anteriores para evitar múltiplos handlers
  modalCloseBtn.removeEventListener("click", closeHandler);
  modalCloseBtn.addEventListener("click", closeHandler);
}

/**
 * Função para atualizar o link de autenticação no cabeçalho
 * para 'Entrar' (deslogado) ou 'Sair' (logado).
 *
 * É CRUCIAL que o link de autenticação no seu HTML tenha o ID 'auth-link'.
 */
function updateHeaderAuthLink() {
  const authLink = document.getElementById("auth-link");
  if (!authLink) {
    console.warn("Elemento de link de autenticação (ID: auth-link) não encontrado.");
    return;
  }

  // Verifica se o papel e o ID do usuário estão no localStorage
  const isLoggedIn = localStorage.getItem("userRole") && localStorage.getItem("userId");

  if (isLoggedIn) {
    // Usuário LOGADO: Mudar para 'Sair'
    authLink.innerText = "Sair";
    authLink.href = "#"; // Evita navegação padrão

    // Remove event listener antigo para evitar duplicação de handlers
    // Clonar o nó é a forma mais simples de remover todos os event listeners
    const newAuthLink = authLink.cloneNode(true);
    authLink.parentNode.replaceChild(newAuthLink, authLink);

    newAuthLink.addEventListener("click", (e) => {
      e.preventDefault();
      // Lógica de LOGOUT
      localStorage.removeItem("userRole");
      localStorage.removeItem("userId");

      showStatusModal("Logout Efetuado", "Você foi desconectado(a).", true, () => {
        // Redireciona para a página de autenticação ou recarrega a página
        if (typeof loadPage === "function") {
          loadPage("pages/auth/auth.html"); // Assumindo que auth.html é a página de login
        } else {
          window.location.reload();
        }
      });
    });

  } else {
    // Usuário DESLOGADO: Mudar para 'Entrar'
    authLink.innerText = "Entrar";
    
    // Configura o link para a página de autenticação (ajuste o href conforme seu projeto)
    authLink.href = "pages/auth/auth.html"; 
    
    // Remove qualquer event listener de logout que possa ter sido adicionado
    const newAuthLink = authLink.cloneNode(true);
    authLink.parentNode.replaceChild(newAuthLink, authLink);
    // Não adiciona nenhum event listener, pois a navegação é feita via `href`
  }
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
  const showLoginFromForgotLink = document.getElementById(
    "show-login-from-forgot"
  );

  // Se não estiverem presentes, encerra
  if (!loginForm && !registerForm && !forgotForm) {
    console.warn("Nenhum formulário de autenticação encontrado.");
    updateHeaderAuthLink(); // Garante que o link do cabeçalho seja atualizado mesmo sem forms
    return;
  }

  // --- Funções de Exibição ---
  function showLogin() {
    if (loginForm) loginForm.style.display = "flex";
    if (registerForm) registerForm.style.display = "none";
    if (forgotForm) forgotForm.style.display = "none";
  }

  function showRegister() {
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "flex";
    if (forgotForm) forgotForm.style.display = "none";
  }

  function showForgot() {
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "none";
    if (forgotForm) forgotForm.style.display = "flex";
  }

  // --- Event Listeners de Troca de Formulário ---
  if (showRegisterLink)
    showRegisterLink.addEventListener("click", (e) => {
      e.preventDefault();
      showRegister();
    });
  if (showLoginLink)
    showLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      showLogin();
    });
  if (showForgotLink)
    showForgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      showForgot();
    });
  if (showLoginFromForgotLink)
    showLoginFromForgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      showLogin();
    });

  // ==============================================================
  // 1. LÓGICA DE LOGIN (Conectado à API)
  // ==============================================================
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("login-email")?.value || "";
      const senha = document.getElementById("login-pass")?.value || "";

      // Limpa a área de mensagem
      const messageArea = document.getElementById("login-message-area");
      if (messageArea) messageArea.style.display = "none";

      try {
        const response = await fetch(`${API_BASE_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.role) {
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("userId", data.userId);
          
          // ATUALIZAÇÃO CRÍTICA: Atualiza o link do cabeçalho após o login
          updateHeaderAuthLink(); 

          showStatusModal(
            "Login Efetuado",
            `Bem-vindo(a)! Seu papel é: ${data.role.toUpperCase()}.`,
            true,
            () => {
              if (typeof loadPage === "function") {
                if (data.role === "administrador") {
                  loadPage("pages/admin/admin.html");
                } else {
                  loadPage("pages/home/home.html");
                }
              } else {
                window.location.reload();
              }
            }
          );
        } else {
          showStatusModal(
            "Falha na Autenticação",
            data.message || "Email ou senha inválidos. Tente novamente.",
            false
          );
        }
      } catch (error) {
        console.error("Erro na conexão com a API:", error);
        showStatusModal(
          "Erro de Conexão",
          "Não foi possível conectar ao servidor. Verifique se a API está rodando.",
          false
        );
      }
    });
  }

  // ==============================================================
  // 2. LÓGICA DE CADASTRO (Conectado à API)
  // ==============================================================
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const btn = registerForm.querySelector("button[type='submit']");
      const originalBtnText = btn ? btn.innerText : null;
      if (btn) {
        btn.disabled = true;
        btn.innerText = "Enviando...";
      }

      const nome = document.getElementById("reg-name")?.value.trim() || "";
      const email = document.getElementById("reg-email")?.value.trim() || "";
      const senha = document.getElementById("reg-pass")?.value || "";
      const userTypeEl = document.querySelector(
        'input[name="userType"]:checked'
      );
      const userType = userTypeEl ? userTypeEl.value : null;

      if (!nome || !email || !userType || !senha) {
        if (btn) {
          btn.disabled = false;
          btn.innerText = originalBtnText;
        }
        return showStatusModal(
          "Erro",
          "Preencha nome, email, tipo de usuário e senha.",
          false
        );
      }

      try {
        const response = await fetch(`${API_BASE_URL}/usuarios/cadastro`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, userType, senha }),
        });

        const data = await response.json().catch(() => ({}));

        if (response.status === 201) {
          showStatusModal(
            "Cadastro Concluído",
            `Obrigado! ${nome}, seu cadastro como ${userType.toUpperCase()} foi realizado com sucesso.`,
            true,
            () => showLogin()
          );
        } else {
          showStatusModal(
            "Erro",
            data.message || "Erro ao processar cadastro.",
            false
          );
        }
      } catch (err) {
        console.error("Erro ao chamar API de cadastro:", err);
        showStatusModal(
          "Erro de Conexão",
          "Não foi possível conectar ao servidor. Verifique se a API está rodando.",
          false
        );
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerText = originalBtnText;
        }
      }
    });
  }

  // ==============================================================
  // 3. LÓGICA DE RECUPERAÇÃO DE SENHA (Simulação)
  // ==============================================================
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("forgot-email")?.value || "";

      showStatusModal(
        "Link Enviado!",
        `Se ${email} estiver cadastrado, você receberá um link de recuperação em breve.`,
        true,
        () => showLogin()
      );
    });
  }
  
  // ==============================================================
  // 4. ATUALIZAÇÃO DO CABEÇALHO
  // ==============================================================
  // Chama a função para configurar o estado inicial do link do cabeçalho
  updateHeaderAuthLink(); 
}

// Inicializa quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", initAuthForms);