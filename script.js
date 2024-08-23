function rollDice() {
  var n1 = Math.ceil(Math.random() * 6);

  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + n1 + ".png");

  var n2 = Math.ceil(Math.random() * 6);

  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + n2 + ".png");

  if (n1 > n2) document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  else if (n1 < n2)
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  else document.querySelector("h1").textContent = "Draw!";
}
