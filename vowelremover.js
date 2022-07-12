/* 
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO" 
*/

function shortcut (str) {
    let split = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let filtered = split.filter( (x) => !vowels.includes(x) )
    let joined = filtered.join('')
    return joined
  }