/*
    Return all the prime numbers in an array
*/

const isPrimeNumber = (nArray) => {
    let primeArray = [];
    for (let i = 0; i < nArray.length; i++) {
        if (nArray[i] <= 1) {
            continue;
        }
         if (nArray[i] <= 3){
            primeArray.push(nArray[i]);
            continue;
        }

        if (nArray[i] % 2 === 0 || nArray[i] % 3 === 0) {
           continue
        }
    }
    return primeArray;
}

const nprimes = [4, 5, 7, 8, 9, 22, 11, 23, 31];
const a = isPrimeNumber(nprimes);
for (let i=0; i<a.length;i++){
    console.log(a[i]); // Output: [5, 7, 11, 23, 31]
}