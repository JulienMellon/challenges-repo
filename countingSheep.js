/*
Description:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// mySolution

function countSheeps(arrayOfSheep) {
  let howManySheep = 0;
  arrayOfSheep.forEach(x => x === true ? howManySheep += 1 : howManySheep += 0)
  return howManySheep
}

or 

function countSheepsVersionTwo(arrayOfSheep) {
  return arrayOfSheep.filter(x => x === true).length
}


// or I can do it with a for loop!

function countSheepsWithForLoop(arrayOfSheep) {
  let z = 0;
  
  for (let i=0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true) {
      z++
    } 
  }
  return z
}
