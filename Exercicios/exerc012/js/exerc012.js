const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
let newArray = []

function numUnicos(arr){
    const unicos = new Set(arr)    
    
    for (var elem of unicos){
        newArray.push(elem)
    }
    // Outra forma seria, utilizar o spread e no retorno(return) colocar [...unicos]
    // que ele espalharia os valores de unicos em um array e não em um set.

    return unicos
}

console.log(numUnicos(meuArray))
console.log(newArray)