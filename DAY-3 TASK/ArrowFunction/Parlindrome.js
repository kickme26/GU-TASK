/*
    Return all the palindromes in an array
*/

const checkPalindrome = (arrInput) => {
    let result = [];
    for (const element of arrInput) {
        let lowercaseWord = element.toLowerCase();
        if (lowercaseWord === lowercaseWord.split('').reverse().join('')) {
            result.push(element);
        }
    }
    return result;
}

const result = checkPalindrome(["mam", "potato", "car", "Aba"]);
for (const element of result) {
    console.log(element);
    }



