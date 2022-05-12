//! VALID PARENTHESES

//! https://www.codewars.com/kata/52774a314c2333f0a7000688

/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
 The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */


//! Solution:

function validParentheses(parens) {

    for(let i = 0; i < parens.length - 1; i++){

      if(parens[i] === "(" && parens[i + 1] === ")"){          
        parens = parens.slice(0, i) + parens.slice(i + 2);
        i = -1;
      };
    }
    return parens.length === 0;
}