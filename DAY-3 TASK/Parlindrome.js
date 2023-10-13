/*
    Return all the palindromes in an array
*/

const checkPalindrome = (arrInput) => {
    let result = [];
    for (let i = 0; i < arrInput.length; i++) {
        const lowercaseWord = arrInput[i].toLowerCase();
        if (lowercaseWord === lowercaseWord.split('').reverse().join('')) {
            result.push(arrInput[i]);
        }
    }
    return result;
}

const result = checkPalindrome(["mam", "potato", "car", "Aba"]);
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
