// A function that adds up all the numbers in an array assuming all the elements are numbers. 

// Sum Numbers
function sum(arr){
  let result = 0
  arr.forEach(x =>
   result = result += x)
  return result
}
