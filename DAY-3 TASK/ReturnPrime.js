/*
    Return all the prime numbers in an array
*/

//Annonymous function 
const isPrime = function(arrnumber) {
    if (arrnumber <= 1) { 
        return false;
    }
    if (arrnumber <= 3) {
        return true;
    }
    if (arrnumber % 2 === 0 || arrnumber % 3 === 0) {
         return false;
    }
    for (let i=5; i*i<=arrnumber; i+=2) {
        if (arrnumber % i === 0) {
            return false;
        }
    }
    return true;
};

//Arrow functions
const printPrimeNumbers = (arr) => {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
};

const numbers = [1,2,3,4,5,6,7,8,9,10,33,31,18,17];
const primeNumbers = printPrimeNumbers(numbers);
console.log(primeNumbers);
