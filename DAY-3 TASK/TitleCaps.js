
/*
    Arrow Function Task
        Convert all the strings to title caps in a string array
        Sum of all numbers in an array
        Return all the prime numbers in an array
        Return all the palindromes in an array
*/


const toTitleCaps = (strarray) =>{
    let title=[];
    for (let i=0;i<strarray.length;i++){
        let splittedString = strarray[i].split(" ");
       
        for (let j=0;j<splittedString.length;j++){
            splittedString[j] = splittedString[j].charAt(0).toUpperCase() + splittedString[j].slice(1);
        }
        title[i] = splittedString.join(" ");
    }
   return title;
}

const toTitleArrays = ["Hell weod", "Time to kiv", "da kif da fas"];
const titleCaps = toTitleCaps(toTitleArrays);
for (let i=0;i<titleCaps.length;i++){
    console.log(titleCaps[i]);
}