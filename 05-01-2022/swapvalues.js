/* I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

*/


//MY solution

// this passes tests but array now has 3 values

// function swapValues(arr) {
//     return arr.unshift(arr[1])
// }


// array now has 2 entries
function swapValues(arr) {
    arr.unshift(arr[1])
    return arr.pop()
}