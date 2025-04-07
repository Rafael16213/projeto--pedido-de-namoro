// Seleciona todos os botões e personagens do DOM
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

/**
 * Remove o botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

/**
 * Marca o botão clicado como selecionado
 * @param {HTMLElement} botao - botão clicado
 */
function marcarBotaoComoSelecionado(botao) {
    botao.classList.add('selecionado');
}

/**
 * Oculta o personagem atualmente visível
 */
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

/**
 * Exibe o personagem correspondente ao botão clicado
 * @param {number} indice - índice do personagem
 */
function mostrarPersonagemCorrespondente(indice) {
    personagens[indice].classList.add('selecionado');
}

/**
 * Adiciona eventos de clique (compatível com mobile e desktop)
 */
function adicionarEventosNosBotoes() {
    botoes.forEach((botao, indice) => {
        // Usa tanto 'click' (desktop) quanto 'touchstart' (mobile) para garantir resposta rápida
        botao.addEventListener('click', () => alterarPersonagem(indice, botao));
        botao.addEventListener('touchstart', () => alterarPersonagem(indice, botao), { passive: true });
    });
}

/**
 * Lógica completa de alteração de botão/personagem
 * @param {number} indice - índice do personagem
 * @param {HTMLElement} botao - botão clicado
 */
function alterarPersonagem(indice, botao) {
    desmarcarBotaoSelecionado();
    marcarBotaoComoSelecionado(botao);

    esconderPersonagemSelecionado();
    mostrarPersonagemCorrespondente(indice);
}

// Inicialização
adicionarEventosNosBotoes();