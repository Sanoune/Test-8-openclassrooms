function convertToBinary() {
  // Récupérer la valeur saisie par l'utilisateur depuis le champ d'entrée
  let decimalNumber = document.getElementById("decimalInput").value;

  // Vérifier si l'entrée est vide ou non numérique
  if (decimalNumber === "" || isNaN(decimalNumber)) {
    alert("Veuillez entrer un nombre décimal valide.");
    return;
  }

  // Convertir la valeur en nombre entier
  decimalNumber = parseInt(decimalNumber);

  // Vérifier si le nombre est négatif (non pris en charge pour cette version simple)
  if (decimalNumber < 0) {
    alert("Le convertisseur ne prend pas en charge les nombres négatifs.");
    return;
  }

  // Cas particulier : si le nombre décimal est 0, la représentation binaire est directement "0"
  if (decimalNumber === 0) {
    document.getElementById("binaryResult").textContent = "0";
    return;
  }

  // Initialiser une variable pour stocker la représentation binaire
  let binaryResult = "";

  // Boucle pour calculer la représentation binaire
  while (decimalNumber > 0) {
    // Ajouter le reste de la division par 2 à la chaîne binaire
    binaryResult = (decimalNumber % 2) + binaryResult;
    // Diviser le nombre par 2 pour la prochaine itération
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  // Afficher le résultat dans l'élément <p> avec l'ID 'binaryResult'
  document.getElementById("binaryResult").textContent = binaryResult;
}
