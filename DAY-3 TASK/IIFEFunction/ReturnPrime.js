/*
    Return all the prime numbers in an array
*/

(function(arr) {
    function isPrime(arrnumber) {
        if (arrnumber <= 1) {
            return false;
        }
        if (arrnumber <= 3) {
            return true;
        }
        if (arrnumber % 2 === 0 || arrnumber % 3 === 0) {
            return false;
        }
        for (let i = 5; i * i <= arrnumber; i += 2) {
            if (arrnumber % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primeNumbers = [];
    for (const element of arr) {
        if (isPrime(element)) {
            primeNumbers.push(element);
        }
    }
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 31, 18, 17]);
