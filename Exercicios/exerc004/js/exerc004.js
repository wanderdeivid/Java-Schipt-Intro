var num = window.document.querySelector('input#num')
var sel = window.document.querySelector('select#sel')

function gerar(){
if (num.value.length == 0){
    window.alert('Número inválido! Tente novamente.')
}else {
    var n = Number(num.value)
    sel.innerHTML = ''
    for (k = 1; k <= 10; k++){
        let item = window.document.createElement('option')
        item.text = `${n} x ${k} = ${n*k}`
        item.value = `tab${k}`
        sel.appendChild(item)
    }
    
}
}