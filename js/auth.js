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

  // Se não estiverem presentes, encerra (evita erros no console)
  if (!loginForm && !registerForm && !forgotForm) {
    console.warn("Nenhum formulário de autenticação encontrado.");
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

  // --- Event Listeners de Troca de Formulário (só se os elementos existirem) ---
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
          // SUCESSO: Salva os dados de autenticação e redireciona
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("userId", data.userId);

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
                // fallback: recarrega a página
                window.location.reload();
              }
            }
          );
        } else {
          // FALHA (401 - Credenciais Inválidas)
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
  // 2. LÓGICA DE CADASTRO (Conectado à API) - inclui senha (texto puro)
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

      // Lê os campos (atenção aos ids no seu HTML)
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
        // NOTA: senha enviada em texto puro conforme solicitado
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
        } else if (response.status === 409) {
          showStatusModal(
            "Cadastro Existente",
            data.message || "Este email já foi cadastrado.",
            false
          );
        } else if (response.status === 400) {
          showStatusModal(
            "Dados Inválidos",
            data.message || "Verifique os campos do formulário.",
            false
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

      // Simulação de Envio BEM-SUCEDIDO
      // Em um sistema real, você chamaria a rota POST /api/v1/recuperar-senha

      showStatusModal(
        "Link Enviado!",
        `Se ${email} estiver cadastrado, você receberá um link de recuperação em breve.`,
        true,
        () => showLogin() // Volta para a tela de Login após fechar o modal
      );
    });
  }
}

// Inicializa quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", initAuthForms);
