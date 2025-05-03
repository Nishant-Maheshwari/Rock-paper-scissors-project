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
function PlayerMove(MOvePicked){
  let computerMovE = getcomputerMovE()
  let result = ''
  if(
    MOvePicked === computerMovE
  ){
   result = "Tie"
  }else if(
    (MOvePicked === "rock" && computerMovE === 'scissors')||
    (MOvePicked === "paper" && computerMovE === 'rock')||
    (MOvePicked === "rock" && computerMovE === 'scissors')
  ){
 result = "you Win"
  }else{
    result = "you Lose"
  }
  console.log(computerMovE);
  
}
