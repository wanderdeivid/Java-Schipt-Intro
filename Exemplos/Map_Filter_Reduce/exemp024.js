// Método map sem o this

const numbers = [0, 1, 2, 3, 5, 9]

const doubleNumbers = numbers.map((num) => num*2);

console.log(doubleNumbers);


// Método map com o this

const goiaba = {
    preco: 1.68,
};

const pera = {
    preco: 2.79,
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function doubleNumbers1 (arr, fruta){
    return arr.map(function (item) {
        return item*this.preco}, fruta)
}

console.log(doubleNumbers1(numbers1, goiaba))

