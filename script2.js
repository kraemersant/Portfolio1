// Função para verificar se o elemento está quase saindo da tela
function isElementAlmostOutOfViewport(el) {
    const rect = el.getBoundingClientRect();
    // Considera o elemento como quase fora se o fundo estiver acima da tela ou se o topo estiver abaixo da tela + 100px
    return (
        rect.bottom < 0 || // O fundo do elemento está acima da tela
        rect.top > (window.innerHeight || document.documentElement.clientHeight) + 100 // O topo do elemento está abaixo da tela
    );
}

// Função para verificar e aplicar animação nos elementos
function checkVisibility() {
    const elements = document.querySelectorAll('.mim, .mim2, .timeline-item'); // Seleciona os elementos a serem animados
    elements.forEach(el => {
        if (!isElementAlmostOutOfViewport(el)) {
            el.classList.add('visible'); // Adiciona a classe 'visible' se o elemento está quase fora da tela
        } else {
            el.classList.remove('visible'); // Remove a classe 'visible' quando o elemento está totalmente fora
        }
    });
}

// Função para adicionar a classe 'visible' aos elementos ao carregar a página
function initVisibility() {
    const elements = document.querySelectorAll('.mim, .mim2, .timeline-item');
    elements.forEach(el => {
        el.classList.add('visible'); // Mantém a classe 'visible' nos elementos desde o início
    });
}

// Adiciona um evento de scroll para verificar a visibilidade dos elementos
window.addEventListener('scroll', checkVisibility);

// Verifica a visibilidade na primeira carga da página
checkVisibility();
initVisibility(); // Chama a função para adicionar a classe 'visible'

