/* Contador
/* Declara uma variável, faz ele ir no documento html e pegar um elemento pelo seu ID(Cada elemento tem um ID único) */
var currentNumberWrapper = document.getElementById('atual');
var atual = 0;

function increment(){
    atual += 1;
    currentNumberWrapper.innerHTML = atual;
}

function decrement(){
    atual -= 1;
    currentNumberWrapper.innerHTML = atual;
}