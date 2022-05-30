//PREP

//Parameters: given an array of numbers, all integers, all positive, 
//return: a single number, that is the mean(average) of those numbers
//example
//mean([1, 3, 5, 7]) // 4, or (1+3+5+7)/4 
//mean([2, 4, 6, 8, 10]) // (2+4+6+8+10)/5

//function, named 'findAverage' takes in an array
function findAverage(array){
//adds all the elements together
 let sum = array.reduce((acc, c) => acc + c, 0)
//divides result of the sum by the array length
//return a single numerical expression
return sum / array.length
}