let not = window.document.querySelector('input#nota');
let nomeAluno = window.document.querySelector('input#nomealuno')
let res = window.document.querySelector('div#res')
let la = window.document.querySelector('select#listaAlunos')
let apro = window.document.querySelector('select#listaAprovados')
let repr = window.document.querySelector('select#listaReprovados')
let alunos = {}
let listaAprovados = []
let listaReprovados =[]

function adicionar(){

    let item = window.document.createElement('option')    
    if (nomeAluno.value.length === 0 || isNaN(nomeAluno.value) === false || not.value.length === 0) return window.alert('Insira um nome válido!');
    alunos.nota = not.value
    alunos.nome = nomeAluno.value
    item.text += `O aluno ${nomeAluno.value} foi adicionado com nota ${not.value}.`
    la.appendChild(item)
    nomeAluno.value = ''
    not.value =''
    nomeAluno.focus()
   
}

function verificar(){
    let media = 7;
        if(alunos.nota >= media){   
            let item = window.document.createElement('option') 
            item.text = `Aluno: ${alunos.nome} Nota: ${alunos.nota}`
            apro.appendChild(item)
            
        }else {
            let item = window.document.createElement('option')
            item.text = `Aluno: ${alunos.nome} Nota: ${alunos.nota}`
            repr.appendChild(item)
            
        }
        nomeAluno.value = ''
    not.value =''
    nomeAluno.focus() 
    }
