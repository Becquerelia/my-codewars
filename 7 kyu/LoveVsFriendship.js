//! LOVE VS FRIENDSHIP

//! https://www.codewars.com/kata/59706036f6e5d1e22d000016

/* If　a = 1, b = 2, c = 3 ... z = 26

   Then l + o + v + e = 54

   and f + r + i + e + n + d + s + h + i + p = 108

   So friendship is twice stronger than love :-)
   The input will always be in lowercase and never be empty. */

//! Solution:

function wordsToMarks(string){
    let result = 0;
    for (let i = 0; i < string.length; i += 1) {
      result += string.charCodeAt(i) - 96;
    }
    return result;
}