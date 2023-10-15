/*
    Print odd numbers in an array
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