/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    let a = []
    if (n>0){
      for (let i = 1; i <= n; i++){
        a.unshift(i)
      }
    }
    return a;
  };