//! SUM WITHOUT HIGHEST AND LOWEST NUMBER

//! https://www.codewars.com/kata/576b93db1129fcf2200001e6

/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element 
  (by value, not by index!). The highest or lowest element respectively is a single element at each edge,
   even if there are more than one with the same value. Mind the input validation.

Example:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation:
If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
or the given array is an empty list or a list with only 1 element, return 0. */


//! Solution:

function sumArray(array) {

    if (!array){
      return 0;
    } 
    
    let sumNumbers = 0;
    array.sort((a,b) => a - b);
    
    for (let i = 1; i < array.length - 1; i++) {
      sumNumbers += array[i];
    }
    return sumNumbers;
}