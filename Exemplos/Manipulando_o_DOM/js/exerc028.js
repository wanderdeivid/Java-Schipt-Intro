// DarkMode ON or Light ON
const botao = window.document.querySelector('button#mode-selector');
const h1 = window.document.querySelector('h1#title');
const body = window.document.getElementsByTagName('body')[0];
const footer = window.document.getElementsByTagName('footer')[0];

botao.addEventListener('click', mudarModo)

function mudarModo(){
    mudarClasses();
    mudarTexto();
}

function mudarClasses(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

function mudarTexto(){
    if (botao.classList.contains('dark-mode')){
        botao.innerHTML = 'Dark Mode'
        h1.innerHTML = 'Light Mode ON'
    }else {
        botao.innerHTML = 'Light Mode'
        h1.innerHTML = 'Dark Mode ON'
    }
}