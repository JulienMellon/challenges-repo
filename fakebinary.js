/*
Description:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/


//mySolution
function fakeBin(x){
  let bin = x.split('')
  let swapped = bin.map(x => x < 5 ? '0' : '1' )
  let result = swapped.join('')
  return result
}
