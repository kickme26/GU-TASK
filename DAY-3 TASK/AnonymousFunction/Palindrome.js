/*
    Return all the palindromes in an array
*/

const palindromeFunc = function (arrInput) {
    let result = [];
    for (let i = 0; i < arrInput.length; i++) {
        const lowercaseWord = arrInput[i].toLowerCase();
        if (lowercaseWord === lowercaseWord.split('').reverse().join('')) {
            result.push(arrInput[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

const result= palindromeFunc(["mam", "potato", "car", "Aba"]);