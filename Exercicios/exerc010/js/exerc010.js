// Calculadora de Idades
let anoAtual = new Date()
let agora = anoAtual.getFullYear()
let res = window.document.querySelector('div#res')

function calculaIdade(anos){
    res.innerHTML = `A idade de ${this.name} é de ${anos -  this.year} anos.`;
}

function verificar(){
    let nome = window.document.querySelector('input#nome')
    let nascimento = window.document.querySelector('input#ano')
    let dados = {}
    
    if (nome.value.length === 0 || isNaN(nome.value) == false || nascimento.value <= 1800){
        return window.alert('Insira um nome e ano válidos!');
    
    }else{
    dados.name = nome.value
    dados.year = nascimento.value
    return calculaIdade.apply(dados, [agora])}
}