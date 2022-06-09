/*

DESCRIPTION:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

// function accepts two numerical arguments, that are positive integers.  
//function returns a single, positive integer, that represents the difference between son's age*2 and dadsAge

function twiceAsOld( dadAge, sonAge){
    return Math.abs( dadAge - sonAge*2 )
}

twiceAsOld(30, 5) //20
twiceAsOld(44, 22) //0
twiceAsOld(60, 40) //20

