//! ARRAY PLUS ARRAY

//! https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
   I'll appreciate for your help. P.S. Each array includes only integer numbers. Output is a number too. */

//! Solution:

function arrayPlusArray(arr1, arr2) {
  let totalSum = 0;

  arr1.forEach((eachNumber) => {
    totalSum += eachNumber;
  });

  arr2.forEach((eachNumber) => {
    totalSum += eachNumber;
  });
  return totalSum;
}
