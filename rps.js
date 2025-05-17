let score = JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  loss:0,
  tie:0
}

function getcomputerMovE(){
  let random =  Math.floor((Math.random()*3)+1) 
  let computerMovE = ''
  if
  (random === 1){
    computerMovE = "rock" 
  }else if
  (random === 2){
    computerMovE = "paper"
  }else{
    computerMovE = "scissors"
  }
  return computerMovE
} 
function PlayerMove(MovePicked){
  let computerMovE = getcomputerMovE()
  let result = ''
  if(
    MovePicked === computerMovE
  ){
   result = "Tie"
  }else if(
    (MovePicked === "rock" && computerMovE === 'scissors')||
    (MovePicked === "paper" && computerMovE === 'rock')||
    (MovePicked === "scissors" && computerMovE === 'paper')
  ){
 result = "You Win"
  }else{
    result = "You Lose"
  }
  scoreTable(result)
   let html = document.querySelector(`.js-moves`);
html.innerHTML = `<div>computer move: ${computerMovE}</div> 
                   <div> Your move: ${MovePicked} </div>
                    <div>${result}</div>`
 scoreUi()
 UpdateMiniSeries(result)
 checkBestOfThree()
 
 } 
 function scoreUi(){
  let html = document.querySelector(`.js-score`)
  html.innerHTML = `<div> wins:${score.wins} loss:${score.loss} tie:${score.tie} </div>`
 }



function scoreTable(result){
  if(
    result === "You Win"){
      score.wins++
    }else if(
      result === "You Lose"
    ){
      score.loss++
    }else{
      score.tie++
    }
    localStrg()
    console.log(score);
    
} 
function reset(){
  score.wins = 0
  score.loss = 0
  score.tie  = 0
  localStrg()
  scoreUi()
}

let isautoPlaying = false;
let intervalId;
function autoPlay(){
  let autoplay1 = document.querySelector(`.js-autoplay`)
  if(!isautoPlaying){
    isautoPlaying = true
 intervalId = setInterval(() => {
    let moves = ['rock','paper','scissors'];
    let randomMove = moves[Math.floor(Math.random()*3)]
    PlayerMove(randomMove)
  },1000);
autoplay1.textContent = "stop Autoplay"} 
else if(isautoPlaying){
 isautoPlaying = false;
  clearInterval(intervalId)
  autoplay1.textContent = "Autoplay"
}

} 
const bestOfthree = {
  playerCount : 0,
  computerCount : 0,
  limit : 2
}

function UpdateMiniSeries(result){
if(
  result === 'You Win'){
  bestOfthree.playerCount++
}else if(
  result === 'You Lose'
){
 bestOfthree.computerCount++
}
}
function checkBestOfThree(){
  let mini = document.querySelector('.js-mini')
if(
  bestOfthree.playerCount === bestOfthree.limit
){
mini.innerHTML = `You won best of Three`
resetBestOfThree()
} 
else if(
  bestOfthree.computerCount === bestOfthree.limit
){
  mini.innerHTML = `Computer Won best of three`
  resetBestOfThree()
}
}
function resetBestOfThree(){
bestOfthree.playerCount = 0;
bestOfthree.computerCount = 0;
}


function localStrg(){
  localStorage.setItem('score',JSON.stringify(score))
}