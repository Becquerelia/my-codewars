//! FAKE BINARY

//! https://www.codewars.com/kata/57eae65a4321032ce000002d

/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
 Return the resulting string.
Note: input will never be an empty string */


//! Solution:

function fakeBin(x){
    let resultBin = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      resultBin += 0;
    } else {
      resultBin += 1;
    }
  }
    return resultBin;
  }