/*
    Return all the prime numbers in an array
*/

const isPrimeNumber = (nArray) => {
    let primeArray = [];
    for (const element of nArray) {
        if (element <= 1) {
            continue;
        }
         if (element <= 3){
            primeArray.push(element);
            continue;
        }

        if (element % 2 === 0 || element % 3 === 0) {
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