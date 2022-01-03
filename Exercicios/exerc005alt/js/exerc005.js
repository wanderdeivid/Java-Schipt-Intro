var num = window.document.querySelector('input#num')
var sel = window.document.querySelector('select#sel')
var res = window.document.querySelector('div#res')
var soma = 0
var valores = []

//var n = Number(num.value)
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(n) != -1){
        return true
    } else{
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(Number(num.value), valores)){
        var item = window.document.createElement('option')
        item.text = `O valor número ${Number(num.value)} foi adicionado.`
        sel.appendChild(item)
        soma += Number(num.value)
        res.innerHTML = ''
        valores.push(Number(num.value))
        
        
    } else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}
var k = valores.sort()
function finalizar(){
    res.innerHTML += `Ao todo temos ${valores.length} números cadastrados.<br>`
    res.innerHTML += `O maior número digitado foi ${k[valores.length-1]}.<br>`
    res.innerHTML += `O menor número digitado foi ${k[0]}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores informados é ${soma/k.length}`
}
