// Generate two random numbers between 1 and 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Select a radnom dice image from images and save the path
var player1Dice = "images/dice"+randomNumber1+".png";
var player2Dice = "images/dice"+randomNumber2+".png";

// Chnage the image of each img src attribute
document.querySelectorAll('img')[0].setAttribute("src", player1Dice);
document.querySelectorAll('img')[1].setAttribute("src", player2Dice);

// Decide the game
if (player1Dice > player2Dice) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (player1Dice < player2Dice) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
