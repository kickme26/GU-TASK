/*
    Prints the Odd Number
*/

const PrintOdd = function (n) {
        let OddArray = [];
        for (let i = 0; i < n; i++) {
            if (i % 2 !== 0) {
                OddArray.push(i);
            }
        }
        return OddArray;
    }

const PrintoddNumbers = PrintOdd(100);
for (const element of PrintoddNumbers) {
    console.log(element);
}
