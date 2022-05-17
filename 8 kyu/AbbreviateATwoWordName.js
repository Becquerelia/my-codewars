//! ABBREVIATE A TWO WORD NAME

//! https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F  */


//! Solution:

function abbrevName(name){

    let newArray = name.split(" ");
    let result = `${newArray[0][0].toUpperCase()}.${newArray[1][0].toUpperCase()}`;
    return result;  
}