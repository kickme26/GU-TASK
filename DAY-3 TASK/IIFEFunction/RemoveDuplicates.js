/*
    Remove Duplicate in annonymous fun
*/

(function(arr) {
    const uniqueArray = [];
    
    for (const element of arr) {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    }
    return uniqueArray;
  })([1, 2, 2, 3, 4, 4, 5]);
