var n1 = window.document.querySelector('input#num1');
var n2 = window.document.querySelector('input#num2');
var res = window.document.querySelector('div#res');
function comparar(){
    res.innerHTML = ''
    if (n1.value.length == 0 || n2.value.length == 0){
        res.innerHTML = 'Valor inválido! Tente novamente.'
    }else{
        if (Number(n1.value) > Number(n2.value)){
            res.innerHTML = `O número ${Number(n1.value)} é maior que ${Number(n2.value)}.<br>`
        }else if (Number(n1.value) < Number(n2.value)){
            res.innerHTML = `O número ${Number(n2.value)} é maior que ${Number(n1.value)}.<br>`
        } else{
            res.innerHTML = `Os números são iguais.<br>`
        }
    }
    let soma = Number(n1.value) + Number(n2.value)
    res.innerHTML += `A soma de seus valores é ${soma} ` 
    if (soma < 10){
        res.innerHTML += `que é menor que 10 e `
    } else if(soma > 10){
        res.innerHTML += `que é maior que 10 e `
    } else {
        res.innerHTML += `que é igual a 10 e `
    }
    
    if (soma < 20){
        res.innerHTML += `é menor que 20. `
    } else if(soma > 20){
        res.innerHTML += `é maior que 20.`
    } else {
        res.innerHTML += `é igual a 20.`
    }
}