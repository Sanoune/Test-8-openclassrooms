// Créez votre fonction ici
function calculateAverage(tab) {
  let sum = 0;
  if (!Array.isArray(tab)) {
    return "No numbers to calculate average";
  }
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }

  const moyenne = sum / tab.length;

  return moyenne;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
