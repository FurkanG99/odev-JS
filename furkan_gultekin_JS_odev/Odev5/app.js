let randomNumber = Math.ceil(Math.random() * 10) ; 
console.log(randomNumber);
let attemps = 3;
let playerScore=0;
let scoreForCorrectAnswer = 10;
let remainingAttemps = attemps;

//! HTML İLE BİRLEŞTİRME;

let msgElement = document.getElementById('message');
let remainingAttemptsElement = document.getElementById('remainingAttempts');
let playerScoreElement = document.getElementById('playerScore');

msgElement.textContent = 'Bir Sayı Tahmin Et: '

//!Tahmin Fonksiyonu oluştur!

function controlGuess (){
  if(randomNumber == parseInt(document.getElementById('guessInputElement').value)  )
{
  // eşleşiyorsa
  alert("DOĞRU");
  playerScore+= scoreForCorrectAnswer;
  playerScoreElement.textContent = playerScore;
}
else{
  alert("YANLIŞ");
  playerScore-= scoreForCorrectAnswer;
  remainingAttemps -=1;
  playerScoreElement.textContent = playerScore;

}
}



//! OYUNU SIFIRLAMA FONKSİYONU EKLE 
function Resetle(){
  attemps = 3;
  remainingAttemps= 3;
  playerScore=0;
  msgElement.textContent  = 'Tekrar Başla'
}
function resetGame(){
  secretNumber = Math.ceil(Math.random() * 10);
  remainingAttemps = attemps;
  remainingAttemptsElement.textContent = remainingAttemps;
  msgElement.textContent  = 'Tekrar Başla'

}