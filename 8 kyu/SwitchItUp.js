//! SWITCH IT UP

//! https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

/* When provided with a number between 0-9, return it in words.

  Input :: 1
  Output :: "One".

  If your language supports it, try using a switch statement. */

//! Solution:

function switchItUp(number){
    let numberAsWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return numberAsWord[number];
}