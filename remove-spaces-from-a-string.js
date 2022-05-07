# Remove Spaces from a string

Description:
Simple, remove the spaces from the string, then return the resultant string.

//Could not answer in time allotted

Many Answers seem to revolve around turning the string into an array and then joining the array back together

function nospace(x){return x.split(' ').join('')}

function noSpace(x){
 let arr =  x.split(' ');
 return arr.reduce((a,b)=>a+b);
}

But also here is a pretty good result with a loop:

function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}

// this is an interesting version that uses recursion and a ternary

const noSpace = ([first, ...rest]) =>
  first
    ? (first === ' ' ? '' : first) + noSpace(rest)
    : '' 
