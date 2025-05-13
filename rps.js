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
    (MovePicked === "rock" && computerMovE === 'scissors')
  ){
 result = "You Win"
  }else{
    result = "You Lose"
  }
  scoreTable(result)
  
  let html = document.querySelector(`.js-result`);
html.innerHTML = `<p>computer move: ${computerMovE}-Your move: ${MovePicked}
 ${result}
 wins:${score.wins} loss:${score.loss} tie:${score.tie}</P>`

  
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
let isautoPlaying = false;
let intervalId;
function autoPlay(){
  if(!isautoPlaying){
    isautoPlaying = true
 intervalId = setInterval(() => {
    let moves = ['rock','paper','scissors'];
    let randomMove = moves[Math.floor(Math.random()*3)]
    PlayerMove(randomMove)
  },1000);}
}

function stopAutoPlay(){
  isautoPlaying = false;
  clearInterval(intervalId)
}


function localStrg(){
  localStorage.setItem('score',JSON.stringify(score))
}