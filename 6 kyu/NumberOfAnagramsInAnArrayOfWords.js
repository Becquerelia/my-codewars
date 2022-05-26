//! NUMBER OF ANAGRAMS IN AN ARRAY OF WORDS

//! https://www.codewars.com/kata/587e18b97a25e865530000d8

/* An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
   An example of this is "angel", which is an anagram of "glean". Write a function that receives 
   an array of words, and returns the total number of distinct pairs of anagramic words inside it.

  Some examples:
  There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
  There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"] */


//! Solution:

function anagramCounter (wordsArray) {

    let sortedArray = wordsArray.map((eachWord) => eachWord.split("").sort().join(""));

    let counter = 0;

    sortedArray.forEach((eachWord, i) =>
      sortedArray.forEach((eachWord2, i2) => {
        if (eachWord === eachWord2 && i !== i2) counter++;
      })
    );
    
    return (counter / 2);
}