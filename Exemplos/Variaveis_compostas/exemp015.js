var num = [1, 5 ,2, 4, 9, 3, 8]
console.log(num)
/*for (pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// O num.indexOf(n) busca dentro do vetor num o número n, caso encontre ele mostra a posição do número e caso não encontre ele mostra -1.