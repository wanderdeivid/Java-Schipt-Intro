/* Contador
/* Declara uma variável, faz ele ir no documento html e pegar um elemento pelo seu ID(Cada elemento tem um ID único) */
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}