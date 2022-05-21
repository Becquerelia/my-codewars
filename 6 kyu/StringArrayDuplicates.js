//! STRING ARRAY DUPLICATES

//! https://www.codewars.com/kata/59f08f89a5e129c543000069

/* In this Kata, you will be given an array of strings and your task is to remove all consecutive
   duplicate letters from each string in the array. For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples. Good luck! */


//! Solution:

function dup(s) {
    const intermediateArr = [];
    const noDuplicated = [];
    
    s.map((eachElement) => {
      eachElement.split('').reduce((acc, value, index, arrayToCheck) => {
        if (arrayToCheck[index] !== arrayToCheck[index+1]) {
          intermediateArr.push(arrayToCheck[index]);
        }
        
        if (index === arrayToCheck.length-1) {
          noDuplicated.push(intermediateArr.join(''));
          intermediateArr.length = 0;
        }      
      }, 0);
    });
            
    return noDuplicated;
};