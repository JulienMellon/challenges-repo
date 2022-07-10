/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function addDigits(num){
    let digits = (num + '').split('')
    let f = digits.map( x => x = Number(x) )
    return f.reduce( (a,b) => a+b, 0)
  }
  
  function digitalRoot(num){
    num = addDigits(num);
    return num < 10 ? num : digitalRoot(num)
  }
  
  addDigits(234)
  
  digitalRoot(2) //2
  digitalRoot(22) //4
  digitalRoot(2342) //2
  digitalRoot(333333333339999992)

  // but also

 const digital_root = (n) => (n - 1) % 9 + 1