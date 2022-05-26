//! WELL OF IDEAS

//! https://www.codewars.com/kata/57f222ce69e09c3630000212

/* For every good kata idea there seem to be quite a few bad ones!
   In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
   If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
   If there are no good ideas, as is often the case, return 'Fail!'. */


//! Solution:

function well(x){

    let ideas = 0;

    x.forEach((eachIdea)=>{
      if (eachIdea === "good"){
        ideas ++;
      };
    });

    if (ideas === 0){
      return "Fail!";
    } else if (ideas > 2) {
      return "I smell a series!";
    } else {
      return "Publish!";
    }
}