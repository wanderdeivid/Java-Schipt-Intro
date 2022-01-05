var n1 = window.document.querySelector('input#num1');
var n2 = window.document.querySelector('input#num2');
var res = window.document.querySelector('div#res');

function criaPrimeiraMensagem(num1, num2){
    let simNao = 'não'
    let primeiraMensagem = `Os números ${num1} e ${num2} `
    if (num1 === num2){
        simNao =''
    }
        return `${primeiraMensagem} ${simNao} são iguais.`
    }

    function criaSegundaMensagem(num1, num2){
        const soma = num1 + num2;
        let comparaDez = 'maior do que'
        let comparaVinte = 'maior do que'
        
        if (soma < 10){
            comparaDez = 'menor do que'
        }else if( soma == 10){
            comparaDez = 'igual a'
        }

        if (soma < 20){
            comparaVinte = 'menor do que'
        }else if( soma == 20){
            comparaVinte = 'igual a'
        }
        
        return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`
    }

function compararNumeros(num1, num2) {
    const primeiraMensagem = criaPrimeiraMensagem(num1, num2);
    const segundaMensagem = criaSegundaMensagem(num1, num2);
    res.innerHTML = `${primeiraMensagem} ${segundaMensagem} `
}


function comparar(){
    res.innerHTML = ''
    if (n1.value.length == 0 || n2.value.length == 0){
        res.innerHTML += 'Valor inválido! Tente novamente.'
    } else {
        compararNumeros(Number(n1.value), Number(n2.value))
    }
}

    
    
    /* else{
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
} */