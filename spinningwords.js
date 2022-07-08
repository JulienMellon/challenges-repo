/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
    //split string into individual words
    let split = string.split(' ')
    // spin the words with five or more letters
    let mapped = split.map(x => x.length > 4 ? x.split('').reverse().join('') : x)
    // return a string with the reversed words in it
    return mapped.join(' ')
  }