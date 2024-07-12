const myButton = document.getElementById("myButton");
const messageParagraphe = document.getElementById("messageParagraphe");
myButton.addEventListener("click", function () {
  messageParagraphe.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
