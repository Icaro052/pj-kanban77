// src/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Inicializa o Firebase Auth
    const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = window.firebaseSDK;

    const auth = getAuth();

    // Função para exibir mensagens de erro
    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    };

    // Função para limpar mensagens de erro
    const clearError = () => {
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
    };

    // Evento de envio do formulário
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearError();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }

        // Verifica qual botão foi clicado
        if (e.submitter === loginBtn) {
            // Login do usuário
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Redireciona para a página principal após login
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    showError(error.message);
                });
        } else if (e.submitter === signupBtn) {
            // Cadastro do usuário
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Redireciona para a página principal após cadastro
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    showError(error.message);
                });
        }
    });
});