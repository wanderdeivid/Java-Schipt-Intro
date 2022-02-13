// Exemplo com filter, retornando os números pares de um array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPar(value){
    return value % 2 == 0    
}
var filtered = nums.filter(isPar);
console.log(filtered)

// Outra maneira:

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = nums1.filter((value) => value % 2 == 0);

console.log(filtered);