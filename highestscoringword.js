/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    const letterScore = {
      a:1,
      b:2,
      c:3,
      d:4,
      e:5,
      f:6,
      g:7,
      h:8,
      i:9,
      j:10,
      k:11,
      l:12,
      m:13,
      n:14,
      o:15,
      p:16,
      q:17,
      r:18,
      s:19,
      t:20,
      u:21,
      v:22,
      w:23,
      x:24,
      y:25,
      z:26
    }
    
    let arr = x.split(' ')
    let wordValues = []
      for (let i = 0; i < arr.length; i++){
        wordValues.push( arr[i].split('').map( x => x = letterScore[x] ).reduce( (a,b)=> a+b, 0) ) 
      }
    let highestScore = wordValues.reduce((a,b)=> Math.max(a, b) )
    let highScoreIndex = wordValues.indexOf(highestScore)
    return arr[highScoreIndex]
    }