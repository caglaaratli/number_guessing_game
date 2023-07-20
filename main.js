
let guessCase=document.getElementById('guessStatu');
let guessCount= document.getElementById("guessAttempt");
let guessedNumber=document.getElementById("guessNumber");
let alertMessage=document.getElementById("alertmsg")
let guessBtn = document.getElementById("guessBtn");
let restartBtn=document.getElementById("restartBtn");


let currentGuessCount=0;
let guessedNumbers=[];

let answer = restartNumber();
console.log(answer);


function restartNumber(){
   return Math.floor(Math.random()*100) +1;
}


let wonGame =()=>{
   guessCase.textContent="Congratulations ! you win";
   guessCount.textContent="You guessed it in" + currentGuessCount +"attempt.";
   guessedNumber.textContent="The number was " + answer;
}

let loseGame=()=>{
   guessCase.textContent="You Lose to Game :( ";
   guessCount.textContent="You didn't guess it in" + currentGuessCount +"attempt.";
   guessedNumber.textContent="The number was " + answer;

}


let checkGame=(sayi)=>{
   if(sayi === answer){
      wonGame();
   }

   else{
      loseGame();
   }
   guessBtn.disabled=true;
   restartBtn.disabled=false;
   answer=restartNumber(); 
   document.getElementById("userNumber").value="";

}

function checkStatus(number, answer) {
   if (number< answer) {
    guessCase.textContent = "Your guess is too low";
   } else if (number > answer) {
     guessCase.textContent="Your guess is too high";
   } 
    guessCount.textContent="No of guesses : " + currentGuessCount;
    guessedNumber.textContent="Guessed numbers" + guessedNumbers;
 }


let checkNumber=(sayi)=>{
      if(sayi === answer){
      wonGame();
      guessBtn.disabled=true;
      restartBtn.disabled=false;
      answer=restartNumber(); 
      console.log(answer);
      document.getElementById("userNumber").value="";
   }
   else{
      checkStatus(sayi,answer);
   }

}

let guessStart=() => {

   let userGuessNumber= Number(document.getElementById("userNumber").value);

   if(userGuessNumber < 1 || userGuessNumber >100){
       alertMessage.textContent="Please enter a number between 1-100.";
   }
    
   else{
            guessedNumbers.push(userGuessNumber);
            currentGuessCount+=1;
            alertMessage.textContent="";

            if(currentGuessCount===5){
               checkGame(userGuessNumber);  
            }

            else{
               checkNumber(userGuessNumber);
            }
         
   }
 
}


let restartGame = () =>{
  restartBtn.disabled=true;
   currentGuessCount=0;
   guessCase.textContent="";
   guessedNumbers=[];
   guessCount.textContent="" ;
   guessedNumber.textContent="";
   guessBtn.disabled=false;
}