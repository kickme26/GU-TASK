
/*
    Return all the palindromes in an array
*/

(function (arrInput) {
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
})(["mam", "potato", "car", "Aba"]);