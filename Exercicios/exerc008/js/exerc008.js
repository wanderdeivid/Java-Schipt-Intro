// Verifica se um número é par ou ímpar, caso for par adiciona um zero no lugar
let num = window.document.querySelector('input#num');
let sel = window.document.getElementById('sel')
let res = window.document.querySelector('div#res')
let lista = []

function isPar(num1){
    if (num1 % 2 == 0){
        return true
    }else{
        return false
    }
}
function adicionar(){
    let item = window.document.createElement('option')
    if (num.value.length === 0 || isNaN(num.value) === true){
        window.alert('Entrada inválida! Tente novamente.')
    }else if (isPar(num.value) === true ){
        item.text = `O valor ${Number(num.value)} é par, o valor 0 foi adicionado a lista.`
        sel.appendChild(item)
        lista.push(0)
    }else{
        item.text = `O valor ${Number(num.value)} é ímpar e foi adicionado a lista.`
        sel.appendChild(item)
        lista.push(num.value)
    }
    res.innerHTML = `Valores adicionados a lista atualmente: <br> ${lista}`
}