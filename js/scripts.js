/* =========================================================
   CP3 — JavaScript compartilhado
   Tema persistente, validação do formulário e Canvas.
   ========================================================= */
(() => {
    "use strict";

    const CHAVE_TEMA = "portfolio-tema";

    function aplicarTema(tema) {
        document.documentElement.dataset.theme = tema;
        const botao = document.getElementById("alternar-tema");

        if (botao) {
            const escuroAtivo = tema === "escuro";
            botao.textContent = escuroAtivo ? "☀️ Tema claro" : "🌙 Tema escuro";
            botao.setAttribute("aria-label", escuroAtivo ? "Ativar tema claro" : "Ativar tema escuro");
            botao.setAttribute("aria-pressed", String(escuroAtivo));
        }
    }

    function iniciarTema() {
        let temaSalvo = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "escuro"
    : "claro";

        try {
            temaSalvo = localStorage.getItem(CHAVE_TEMA) || "claro";
        } catch (erro) {
            console.warn("Não foi possível acessar o armazenamento local.", erro);
        }

        aplicarTema(temaSalvo === "escuro" ? "escuro" : "claro");

        const botao = document.getElementById("alternar-tema");
        if (!botao) return;

        botao.addEventListener("click", () => {
            const novoTema = document.documentElement.dataset.theme === "escuro"
                ? "claro"
                : "escuro";

            aplicarTema(novoTema);

            try {
                localStorage.setItem(CHAVE_TEMA, novoTema);
            } catch (erro) {
                console.warn("Não foi possível salvar a preferência de tema.", erro);
            }
        });
    }

    function iniciarFormulario() {
        const formulario = document.getElementById("form-contato");
        const feedback = document.getElementById("feedback-formulario");

        if (!formulario || !feedback) return;

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            feedback.hidden = false;
            feedback.className = "feedback-formulario";

            if (!formulario.checkValidity()) {
                formulario.classList.add("formulario-invalido");
                feedback.textContent = "Confira os campos destacados. Preencha os dados obrigatórios e verifique os formatos informados.";
                feedback.classList.add("feedback-erro");
                formulario.reportValidity();
                return;
            }

            formulario.classList.remove("formulario-invalido");
            feedback.textContent = "Formulário validado com sucesso! Esta demonstração não envia os dados para um servidor.";
            feedback.classList.add("feedback-sucesso");
            formulario.reset();
        });

        formulario.addEventListener("input", () => {
            if (!feedback.hidden) {
                feedback.hidden = true;
                feedback.textContent = "";
                feedback.className = "feedback-formulario";
            }
        });
    }

    function desenharCanvas() {
        const canvas = document.getElementById("desenho");
        if (!canvas || !canvas.getContext) return;

        const contexto = canvas.getContext("2d");
        if (!contexto) return;

        contexto.clearRect(0, 0, canvas.width, canvas.height);
        contexto.fillStyle = "#2563eb";
        contexto.fillRect(30, 35, 130, 75);

        contexto.beginPath();
        contexto.arc(250, 80, 48, 0, Math.PI * 2);
        contexto.fillStyle = "#16a34a";
        contexto.fill();
    }

    document.addEventListener("DOMContentLoaded", () => {
        iniciarTema();
        iniciarFormulario();
        desenharCanvas();
    });
})();
