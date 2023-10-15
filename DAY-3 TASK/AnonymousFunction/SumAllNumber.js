/*
    Return all the sum of all numbers in an array
*/

const SumOfAllNumber = function (arrInput) {
    let sum = 0;
    for (const element of arrInput) {
        sum =sum + element;
    }
    console.log(sum);
}
const result = SumOfAllNumber([91, 22, 45, 43, 56]);

