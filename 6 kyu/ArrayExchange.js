//! ARRAY EXCHANGE

//! https://www.codewars.com/kata/5353212e5ee40d4694001114

/* Array Exchange and Reversing. It's time for some array exchange! 
The objective is simple: exchange the elements of two arrays in-place
in a way that their new content is also reversed.

Before:
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

After:
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a'] */


//! Solution:

function exchangeWith(a, b) {

    let lengthOfChainA = a.length;
    let lengthOfChainB = b.length;
   
    for (let i = 0; i < lengthOfChainA; i++) {
       const changeCharacter = a.pop();
       b.push(changeCharacter);
    };
   
    for (let i = 0; i < lengthOfChainB; i++) {
       const changeCharacter = b.shift();
       a.unshift(changeCharacter);
    };
}