//! EXES AND OHS

//! https://www.codewars.com/kata/55908aad6620c066bc00002a

/* Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


//! Solution:

function XO(str) {

    str = str.toLowerCase();  
      let interX = "";
      let interO = "";

      for (let i = 0; i<str.length; i++) {
        if (str[i] === "x") {
          interX += str[i];
        } else if (str[i] === "o") {
          interO += str[i];
        }
      }
    
      if (interX.length === interO.length) {
      return true;
      } else {
        return false;
    }
}