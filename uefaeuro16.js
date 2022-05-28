

function uefaEuro2016(teams, scores){
  let match = `At match ${teams[0]} - ${teams[1]}`
    return scores[0] === scores[1] ? match + `, teams played draw.`
      : scores[0] > scores[1] ? match + `, ${teams[0]} won!`
      : match + `, ${teams[1]} won!`
}