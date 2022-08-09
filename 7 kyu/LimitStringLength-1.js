//! LIMIT STRING LENGTH -1

//! https://www.codewars.com/kata/5208fc3cb613bc725f000142

/* The function must return the truncated version of the given string up to the given limit
   followed by "..." if the result is shorter than the original. 
   Return the same string if nothing was truncated.  */


//! Solution:

function solution(string, limit){
    return string.length > limit ? string.slice(0, limit) + '...' : string;
}