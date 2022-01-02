
function verificar(){
    var pais = window.document.querySelector('input#pais');
    var msg = window.document.querySelector('p#msg')
    var mg = String(pais.value)

    if (mg == 'Brasil' || mg == 'Brazil'){
        msg.innerHTML = `Você é <strong>brasileiro</strong>.`
    }else {
        msg.innerHTML = `Você é <strong>estrangeiro</strong>.`
    }
}