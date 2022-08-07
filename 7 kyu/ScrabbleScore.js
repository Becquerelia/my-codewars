//! SCRABBLE SCORE

//! https://www.codewars.com/kata/558fa34727c2d274c10000ae

/* Write a program that, given a word, computes the scrabble score for that word.

   Letter Values
   You'll need these:

   Letter                           Value
   A, E, I, O, U, L, N, R, S, T       1
   D, G                               2
   B, C, M, P                         3
   F, H, V, W, Y                      4
   K                                  5
   J, X                               8
   Q, Z                               10

   There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1. */

//! Solution:

function scrabbleScore(str){
    str=str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; ++i)
    {
      if (str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='l' || str[i]=='n' || str[i]=='r' || str[i]=='s' || str[i]=='t')
        count ++;
      if (str[i]=='d' || str[i]=='g')
        count += 2;
      if (str[i]=='b' || str[i]=='c' || str[i]=='m' || str[i]=='p')
        count += 3;
      if (str[i]=='f' || str[i]=='h' || str[i]=='v' || str[i]=='w' || str[i]=='y')
        count += 4;
      if (str[i]=='k')
        count += 5;
      if (str[i]=='j' || str[i]=='x')
        count += 8;
      if (str[i]=='q' || str[i]=='z')
        count += 10;
    }
    return count;
}