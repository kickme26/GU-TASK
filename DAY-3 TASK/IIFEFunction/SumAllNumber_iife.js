/*
    Sum of all numbers in an array
*/

(function (arrInput) {
    let sum = 0;
    for (const element of arrInput) {
        sum =sum + element;
    }
    console.log(sum);
})([91, 22, 45, 43, 56]);
