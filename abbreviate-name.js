/*
Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


function abbrevName(name){
let firstLast = name.toUpperCase().split(' ')
let initials = firstLast.map(x => x[0])
return initials.join('.')

}


//there has to be a better way to push this to git and I'm gonna figure it out soon enough
