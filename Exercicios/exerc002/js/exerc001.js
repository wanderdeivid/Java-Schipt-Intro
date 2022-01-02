function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Ano inválido! Tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        // Cria o elemento img.
        var img = window.document.createElement('img')
        // Cria para o elemento img uma id com o nome foto.
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade <= 5){
                // bebe
                img.setAttribute('src', 'img/bebe-menino.jpg')
                img.setAttribute('class','rounded-circle')
            } else if (idade <= 15) {
                // Criança
                img.setAttribute('src', 'img/child-boy.jpg')
                img.setAttribute('class',' rounded-circle')
            } else if (idade <= 25){
                // Jovem
                img.setAttribute('src','img/young-boy.jpg')
                img.setAttribute('class','rounded-circle')
            } else if (idade <= 50){
                // Adulto
                img.setAttribute('src', 'img/adult-man.jpg')
                img.setAttribute('class', 'rounded-circle')
            }else {
                // ancião
                img.setAttribute('src', 'img/old-man.jpg')
                img.setAttribute('class','rounded-circle')
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 5){
                // bebe
                img.setAttribute('src', 'img/bebe-menina.jpg')
                img.setAttribute('class','rounded-circle')
            } else if (idade <= 15) {
                // Criança
                img.setAttribute('src', 'img/child-girl.jpg')
                img.setAttribute('class','rounded-circle')
            } else if (idade < 25){
                // Jovem
                img.setAttribute('src', 'img/young-girl.jpg')
                img.setAttribute('class','rounded-circle')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'img/adult-woman.jpg')
                img.setAttribute('class','rounded-circle')
            }else {
                // ancião
                img.setAttribute('src', 'img/old-woman.jpg')
                img.setAttribute('class','rounded-circle')
            }
        }
        res.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }

}