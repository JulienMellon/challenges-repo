// ok whatever... rock paper scissors...
/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    let r = 'rock'
    let s = 'scissors'
    let p = 'paper'
    let p1Win = 'Player 1 won!'
    let p2Win = 'Player 2 won!'
    return p1 == r && p2 == s ? p1Win 
    : p1 == p && p2 == r ? p1Win
    : p1 == s && p2 == p ? p1Win
    : p1 == p2 ? 'Draw!'
    : p2Win
  };