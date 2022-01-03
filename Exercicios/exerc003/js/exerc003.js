function contar() {
    /*var inicio = 0
    var passo = 1
    var fim = 10
    for (c = inicio; c <= fim; c += passo){
        console.log(c)
    }*/
    var ini = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var msg = window.document.querySelector('div#msg')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(ini.value) == Number(fim.value))  {
        window.alert('Dados Inválidos! Tente novamente.')
    }else if (Number(ini.value) < Number(fim.value)) {
        // Contagem progressiva
        msg.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for (c = i; c <= f; c += p ) {
            msg.innerHTML += `${c}`
            if (c >= f){
                msg.innerHTML += ` &#x1F3C1`
            }else if (c < f){
                msg.innerHTML += ` &#x27A1 `
            }
        }
    } else if (Number(ini.value) > Number(fim.value)){
        // Contagem regressiva
        msg.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for (c = i; c >= f; c -= p ) {
            msg.innerHTML += `${c}`
            if (c > f){
                msg.innerHTML += ` &#x27A1 `
            }else {
                msg.innerHTML += ` &#x1F3C1`
            }
        }
    }
}

//if (c > f){
//    msg.innerHTML += ` &#x1F3C1`
//}