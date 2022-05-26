//! SQUARE EVERY DIGIT

//! https://www.codewars.com/kata/546e2562b03326a88e000020

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
   Note: The function accepts an integer and returns an integer */


//! Solution:

function squareDigits(num){
  
    let numbers = num.toString();
    let result = "";
    for (let i = 0; i < numbers.length; i++){
      result += Number(numbers[i] ** 2);
    }

    return Number(result);  
}