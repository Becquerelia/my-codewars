//! INVERTING A HASH

//! https://www.codewars.com/kata/5b5604e26dc79e6832000101

/* Given a Hash made up of keys and values, invert the hash by swapping them.
  Examples:
  
  Given:
  { a: '1',
    b: '2',
    c: '3' }

  Return:
  { 1: 'a',
    2: 'b',
    3: 'c' }

  Given:
  { foo:   'bar',
    hello: 'world' }

  Return:
  { bar:   'foo',
    world: 'hello' } 
    
  Keys and values may be of any type appropriate for use as a key.
  All hashes provided as input will have unique values, so the inversion is involutive.
  In other words, do not worry about identical values stored under different keys.*/


//! Solution:

function invertHash(hash) {

    let objectKeys = Object.keys(hash);
    let objectValues = Object.values(hash);
    let invertedObject = {};

    for (let i = 0; i < objectKeys.length; i++) {
      invertedObject[objectValues[i]] = objectKeys[i];
    }
    
    return invertedObject; 
}