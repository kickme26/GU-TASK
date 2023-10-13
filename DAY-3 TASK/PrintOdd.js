
/*
    Arrow Function Task
        Print odd numbers in an array
        Convert all the strings to title caps in a string array
        Sum of all numbers in an array
        Return all the prime numbers in an array
        Return all the palindromes in an array
*/

const oddNumbers = (n) =>{
    let OddArray=[];
    for (let i=0;i<n;i++){
        if(i%2!==0){
            OddArray.push(i); 
        }
    }
   return OddArray;
}

const PrintoddNumbers = oddNumbers(100);
for(j=0;j<PrintoddNumbers.length;j++){
    console.log(PrintoddNumbers[j]);
}