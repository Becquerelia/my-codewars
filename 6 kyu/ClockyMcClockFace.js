//! CLOCKY MC CLOCK-FACE

//! https://www.codewars.com/kata/59752e1f064d1261cb0000ec

/* Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
   And because the local council has lost most of our tax money to a Nigerian email scam
   there are no funds to fix the clock properly. Instead, they are asking for volunteer 
   programmers to write some code that tell the time by only looking at the remaining hour-hand!
   What a bunch of cheapskates! Can you do it?

  Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format.
  Round down to the nearest minute.

  Examples
  12:00 = 0 degrees
  03:00 = 90 degrees
  06:00 = 180 degrees
  09:00 = 270 degrees
  12:00 = 360 degrees

  Notes
  0 <= angle <= 360

  Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

  3 o'clock is 03:00, not 15:00
  7 minutes past midnight is 12:07
  7 minutes past noon is also 12:07 */


//! Solution:

var whatTimeIsIt = function(angle) {

    let converseMinutes = angle * 2;
  
    let hours = Math.floor(converseMinutes / 60);
    let minutes = Math.floor(converseMinutes % 60);
  
    let resultHours = ("0" + hours).slice(-2);
    let resultMinutes = ("0" + minutes).slice(-2);
  
    if (hours === 0){
      resultHours = "12";
    } 
  
    return `${resultHours}:${resultMinutes}`;
}