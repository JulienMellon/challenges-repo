// there's a method for this, you say?  well i didn't know about it so i used a for loop

/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/


//mysolution
function repeatStr (n, s) {
 let p = "";
 for(let i =0; i<n; i++){
 p += s;
 }
 return p;
}

//an 'other' way
function repeatStr (n, s) {
  return s.repeat(n);
}
