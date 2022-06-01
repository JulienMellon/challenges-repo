/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

//PREP

//Parameters: given an array of players, and a 1-based index; index number may be larger than player array length
//return the .name property of the player at index"goose" 
// example: ddg([e, f, g, h], 2) //f.name
// goose -1 === possible index of goose
// if goose > players.length, subtract players.length from goose and do it again


function duckDuckGoose(players, goose) {
  return players[goose - 1] ? players[goose -1].name : duckDuckGoose(players, goose - players.length) 
  
}