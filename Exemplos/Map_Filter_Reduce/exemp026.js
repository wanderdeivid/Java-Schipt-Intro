// Método reduce.

// Soma de números

const array = [1, 3, 6, 2, 7, 8];
const reducer = (anterior, atual) => anterior + atual
console.log(array.reduce(reducer))

// Calculadora de saldo
/* const saldoDisponivel = 100
function _saldoFinal(saldo, itens){
    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo)
    return saldoFinal
} */

const saldoDisponivel = 100

const lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

console.log(_saldoFinal(saldoDisponivel, lista))

function _saldoFinal(saldo, itens){
    return itens.reduce(function (dinheiro, item, index){
        console.log('Rodada', index + 1);
        console.log({dinheiro})
        console.log({item})
        return dinheiro - item.preco
    }, saldo)
}

