/*
    Remove Duplicate in annonymous fun
*/

const removeDuplicates = function(arr) {
    const uniqueArray = [];
    
    for (const element of arr) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    }
  
    return uniqueArray;
  }
  
  const duplicateArrays = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(duplicateArrays);
  console.log(uniqueArray); 
  