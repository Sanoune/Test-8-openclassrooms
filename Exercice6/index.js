const display = document.getElementById("display");

function appendToDisplay(value) {
  console.log("Appending:", value); // Log la valeur ajoutée
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      throw new Error("Division by zero");
    }
    if (isNaN(result)) {
      throw new Error("Invalid operation");
    }
    display.value = result;
  } catch (error) {
    if (error.message === "Division by zero") {
      display.value = "Division by zero is not allowed";
    } else if (error.message === "Invalid operation") {
      display.value = "Invalid operation";
    } else {
      display.value = "Error";
    }
  }
}
