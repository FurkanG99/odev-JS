let randomNumber = Math.ceil(Math.random() * 10) ; 
let attemps = 3;
let playerScore=0;
let remainingAttemps = attemps;

//! HTML İLE BİRLEŞTİRME;

let msgElement = document.getElementById('message');
let guessInputElement = document.getElementById('guessInput');
let remainingAttemptsElement = document.getElementById('remainingAttempts');
let playerScoreElement = document.getElementById('playerScore');

msgElement.textContent = 'Bir Sayı Tahmin Et: '

//!Tahmin Fonksiyonu oluştur!

function controlGuess (guessInputElement){
  parseInt(guessInputElement);
  return;
}

if(guessInputElement == randomNumber){
  msgElement.textContent = 'Tebrikler! Doğru Bildiniz.'
  playerScore += remainingAttemps * 10;
  playerScoreElement.textContent = playerScore;
  resetGame();
}else{
  remainingAttemps --;
  msgElement.textContent = 'Yanlış Bildiniz 2 hakkınız kaldı'
}
if (remainingAttemps === 0){
  msgElement.textContent =  'Oyun bitti. Doğru sayı ' + secretNumber ;

  resetGame();
}else {
  remainingAttemps --;
  msgElement.textContent = 'Hakkınız Bitti. Tekrar dene '
}

//! OYUNU SIFIRLAMA FONKSİYONU EKLE 

function resetGame(){
  secretNumber = Math.ceil(Math.random() * 10);
  remainingAttemps = attemps;
  remainingAttemptsElement.textContent = remainingAttemps;
  msgElement.textContent  = 'Tekrar Başla'

}