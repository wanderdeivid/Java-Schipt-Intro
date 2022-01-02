function carregar() {
var msg = window.document.querySelector('div#msg');
var img = window.document.querySelector('img#img');
var data = new Date();
var hora = data.getHours();
var min = data.getUTCMinutes();
switch (min){
    case 0:
        msg.innerHTML = `Agora são ${hora} horas`
        break
    case 1:
        msg.innerHTML = `Agora são ${hora} horas e ${min} minuto`
    default:
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
}

if (hora >= 0 && hora < 12){
    // Bom Dia!
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18){
    //Boa Tarde!!
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
}else {
    // Boa Noite!
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
}
}