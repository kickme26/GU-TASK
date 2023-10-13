(function () {
    const oddNumbers = (n) => {
        let OddArray = [];
        for (let i = 0; i < n; i++) {
            if (i % 2 !== 0) {
                OddArray.push(i);
            }
        }
        return OddArray;
    }

    const PrintoddNumbers = oddNumbers(100);
    for (let j = 0; j < PrintoddNumbers.length; j++) {
        console.log(PrintoddNumbers[j]);
    }
})();
