function returnEvenValues (array) {
    let evenNums = [];
    for(let i = 0; i < array.length; ++ i){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são: \n', evenNums);
}
let array = [1, 2, 3 , 5, 7, 8, 9]
returnEvenValues(array)