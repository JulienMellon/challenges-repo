/*  description:
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

//  something wrong with this... works for the 'fixed tests' but it seems to not work too well for large datasets...
/*
<--- Last few GCs --->  

[1:0x7fd33c3532d0]     1888 ms: Scavenge 1151.0 (1184.3) -> 1151.0 (1184.3) MB, 50.0 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure 
[1:0x7fd33c3532d0]     2813 ms: Mark-sweep 1724.8 (1758.1) -> 1719.6 (1754.7) MB, 342.0 / 0.0 ms  (+ 35.2 ms in 12 steps since start of marking, biggest step 4.5 ms, walltime since start of marking 2278 ms) (average mu = 1.000, current mu = 1.000) allocat

<--- JS stacktrace --->

FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
*/
// function oddCount(n){
//   let arr = []
//   for (let i = 0; i < n; i++){ 
//     if (i % 2 != 0){ 
//       arr.push(i) 
//     }
//   }
//   console.log(arr)
//   console.log(arr.length)
//   return arr.length 
// }

//but i bet this will work!

function oddCount(n){
    return n % 2 === 0 ? n/2 : (n - 1)/2
  }
  
  // I wonder which one is faster? n % 2 === 0 ? n/2 : (n - 1)/2  or  Math.floor(n/2) 