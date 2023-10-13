/*
    Sum of all numbers in an array
*/

const sumArrayValue = (arrInput) =>{
    let sum = 0;
    for (let i=0;i<arrInput.length;i++){
        sum += arrInput[i];
    }
    return sum;
}

const sum = sumArrayValue([91,22,45,43,56]);
console.log(sum);