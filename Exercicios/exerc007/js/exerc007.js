// Rotina que testa se o que foi digitado é o mesmo no sentido reverso.
let res = window.document.querySelector('div#res')
let text = window.document.querySelector('input#text');

function verificaPalindromo(string){
    
    if (!string) return window.alert('Entrada inválida! Tente novamente.')
    
    return string.split('').reverse().join('') === string
    
}

function verificar(){
    res.innerHTML = ''
    if (verificaPalindromo(text.value) == true){
        res.innerHTML = `A palavra ${text.value} é um palíndromo!`
    }else if(verificaPalindromo(text.value) == false ){
        res.innerHTML = `A palavra ${text.value} não é um palíndromo!`
    }
        // Atribui uma string vazia na área de texto
        text.value = ''
        // Apos clicar em verificar o cursor volta para a caixa de texto.
        text.focus()
}
