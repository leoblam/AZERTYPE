function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

function displayError(error) {
  let zoneError = document.querySelector(".zoneError");
  zoneError.innerText = error;
}

function displayScore(score) {
  let zoneScore = document.querySelector(".zoneScore >span");
  zoneScore.innerText = score;
}

function lancerJeu() {
  let score = 0;
  let i = 0;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  displayError("");
  afficherProposition(listeMots[i]);

  let optionSource;

  let radios = document.querySelectorAll(
    "input[type=radio][name=optionSource]"
  );
  radios.forEach((radio) =>
    radio.addEventListener("change", (event) => console.log(event.target.value))
  );
  let liste = listeMots;
  if (event.target.value === "2") {
    liste = listePhrases;
  }
  afficherProposition(liste[i]);
  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    {
      if (inputEcriture.value === "") {
        displayError("Vous devez ecrire quelque chose ");
      } else {
        if (inputEcriture.value !== liste[i]) {
          displayError("Vous fait une erreur ");
          afficherProposition(liste[i]);
          score--;
          inputEcriture.value = "";
          displayScore(score);
        } else {
          displayError("");
          i++;
          score++;
          console.log(score);
          afficherProposition(liste[i]);
          displayScore(score);
          inputEcriture.value = "";
          if (liste[i] === undefined) {
            afficherProposition(
              "Le jeu est terminé, votre score est de " + score
            );
            btnValiderMot.disabled = true;
          }
        }
      }
    }
  });
}

let input = document.getElementById("inputEcriture");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnValiderMot").click();
  }
});
