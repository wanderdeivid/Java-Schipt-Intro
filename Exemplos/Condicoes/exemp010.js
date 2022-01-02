function calcular(){
    // var txtv = window.document.querySelector('input#txtvel') outra forma.
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var msg = window.document.querySelector('p#msg')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel} km/h</strong>.`
    if (vel > 60){
        msg.innerHTML = `Você ultrapassou a velocidade permitida. <strong>MULTADO</strong>!`
    } else {
        msg.innerHTML = `Você está dentro do limite de velocidade permitido. <strong>Boa Viagem.</strong>`
    }
    // Se colocar apenas o '=' a mensagem anterior não será exibida.
    msg.innerHTML += `<p>Diriga com segurança, utilize sempre o cinto de segurança.</p>`
}

