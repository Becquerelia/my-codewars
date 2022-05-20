//! BIT COUNTING

//! https://www.codewars.com/kata/526571aae218b8ee490006f4

/* Write a function that takes an integer as input, and returns the number of bits that are equal to one
   in the binary representation of that number. You can guarantee that input is non-negative.

   Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */


//! Solution:

var countBits = function(n) {
    let bin = n.toString(2);
    let sum = 0;
    for (let i = 0; i < bin.length; i++) {
      sum += parseInt(bin[i]);
    }
    return sum;
};