var num = window.document.querySelector('input#num')
var sel = window.document.querySelector('select#sel')
var res = window.document.querySelector('div#res')
var soma = 0

//var n = Number(num.value)
var valores = []
function adicionar() {
    var n = Number(num.value)
    soma += n
    if (num.value.length == 0 || n > 100 || n < 1){
        window.alert('Número inválido! Tente novamente.')
    } else if (num.value in valores){
        window.alert('O número já se encontra na lista.')
    } else {
        var n = Number(num.value)
        valores.push(n)
        var item = window.document.createElement('option')
        item.text = `O valor ${n} foi adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
    }
}
var k = valores.sort()
function finalizar(){
    res.innerHTML += `Ao todo temos ${valores.length} números cadastrados.<br>`
    res.innerHTML += `O maior número digitado foi ${k[valores.length-1]}.<br>`
    res.innerHTML += `O menor número digitado foi ${k[0]}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores informados é ${soma/k.length}`
}
