const l = 'LIFE IS NOT A PROBLEM TO BE SOLVED'
let N = 0

let texto = []
for (i in l){
    if (N == i){
        texto.push(l[i])
        N++
        }
    }
console.log(texto.join(''))