let randomNumber = Math.ceil(Math.random() * 100) ; 
console.log(randomNumber);
let attemps = 10;
let playerScore=100;
let scoreForCorrectAnswer = 10;
let remainingAttemps = attemps;

//! HTML İLE BİRLEŞTİRME;

let msgElement = document.getElementById('message');
let remainingAttemptsElement = document.getElementById('remainingAttempts');
let playerScoreElement = document.getElementById('playerScore');
let guessInputElement = document.getElementById('guessInputElement').value

msgElement.textContent = 'Bir Sayı Tahmin Et: '

//!Tahmin Fonksiyonu oluştur!

function controlGuess() {
  let userGuess = parseInt(document.getElementById('guessInputElement').value);

  if (userGuess === randomNumber) {
    // eşleşiyorsa
    alert("Tebrikler! Doğru Bildin");
    playerScore += scoreForCorrectAnswer;
    playerScoreElement.textContent = playerScore;
    Resetle();
  } else {
    if (userGuess < randomNumber) {
      msgElement.textContent = 'Daha büyük bir sayı olacak';
    } else {
      msgElement.textContent = 'Daha Küçük bir sayı olacak';
    }
    alert("HAHAHAHAH Bilemedin mi :)) belki bu sefer bilirsin.");
    playerScore -= scoreForCorrectAnswer;
    remainingAttemps -= 1;
    playerScoreElement.textContent = playerScore;
    remainingAttemptsElement.textContent = remainingAttemps;
  }
}


// //! OYUNU SIFIRLAMA FONKSİYONU EKLE 
// function Resetle(){
//   attemps = 3;
//   remainingAttemps= 3;
//   playerScore=0;
//   msgElement.textContent  = 'Yeniden Denemek İster misin :) ?'
// }
