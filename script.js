var targetLocation = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var message = document.getElementById("message");
  var guess = parseInt(guessInput.value);

  var errorSound = new Audio("wet-fart-6139.mp3");

  function playErrorSound() {
    errorSound.play();
  }

 if (isNaN(guess) || guess < 1 || guess > 100) {
  message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
} else {
  attempts++;

  if (guess < targetLocation) {
    message.textContent = "¡El pedo está en una habitación más grande!";
  } else if (guess > targetLocation) {
    message.textContent = "¡El pedo está en una habitación más pequeña!";
  } else {
    message.textContent = "¡Felicidades! ¡Has encontrado el pedo invisible en la habitación " + targetLocation + "!";
    message.style.color = "green";
    guessInput.disabled = true;
    playErrorSound(); // Reproducir el sonido de error
  }
}


  guessInput.value = "";
  guessInput.focus();
}

document.getElementById("guessInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
