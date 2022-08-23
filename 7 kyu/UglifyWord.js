//! UGLIFY WORD

//! https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929

/* In this kata, you have to make a function named uglify_word (uglifyWord in Java and Javascript).
   It accepts a string parameter. It checks the char in the given string from the front with an iteration,
   in the iteration it does these steps:

   1. There is a flag and it will be started from 1.
   2. Check the current char in the iteration index.
      - If it is an alphabet character [a-zA-Z] and the flag value is equal to 1, then change this character to upper case.
      - If it is an alphabet character [a-zA-Z] and the flag value is equal to 0, then change this character to lower case.
      - Otherwise, if it is not an alphabet character, then set the flag value to 1.
   3. If the current char is an alphabet character, do a boolean not operation to the flag.

   After the iteration has done, return the fixed string that might have been changed in such iteration. */


//! Solution:

function uglifyWord(s) {
    let ans='';
    let b=true;
    for (let i=0; i<s.length; ++i){
       if (b) {
        ans += s[i].toUpperCase();
       } else {
        ans += s[i].toLowerCase();
       }
      
      if (s[i].toLowerCase()>='a' && s[i].toLowerCase()<='z') {
        b = !b;
      } else {
        b = true;
      }          
    }
    return ans;
}