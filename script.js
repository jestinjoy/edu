// Store correct answers for some rows
const correctAnswers = [
  { value: 100 },
  { value: 200 },
  // Add more correct answers as needed
];

// Function to create a table row
function createRow(rowNumber) {
  const row = document.createElement("tr");

  // Column 1: Notes
  const notesColumn = document.createElement("td");
  notesColumn.textContent = "100 Rupee Note".repeat(rowNumber);
  row.appendChild(notesColumn);

  // Column 2: Value
  const valueColumn = document.createElement("td");
  const valueInput = document.createElement("input");
  valueInput.type = "number";
  valueInput.id = "value_" + rowNumber;
  valueColumn.appendChild(valueInput);
  row.appendChild(valueColumn);

  // Column 3: Submit Button
  const submitColumn = document.createElement("td");
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", function () {
    checkAnswer(rowNumber);
  });
  submitColumn.appendChild(submitButton);
  row.appendChild(submitColumn);

  return row;
}

// Function to check the answer for a row
function checkAnswer(rowNumber) {
  const valueInput = document.getElementById("value_" + rowNumber);

  const userAnswer = {
    value: parseInt(valueInput.value),
  };

  const correctAnswer = correctAnswers[rowNumber - 1];

  if (userAnswer.value === correctAnswer.value) {
    // Correct answer
    valueInput.setAttribute("disabled", true);
    valueInput.classList.add("correct");

    // Check if all rows are correct
    if (checkAllCorrect()) {
      document.getElementById("feedback").textContent = "Congratulations! All answers are correct.";
    }
  } else {
    // Incorrect answer
    document.getElementById("feedback").textContent = "Incorrect answer. Please try again.";
    valueInput.classList.add("incorrect");
  }
}

// Function to check if all rows are correct
function checkAllCorrect() {
  for (let i = 1; i <= correctAnswers.length; i++) {
    const valueInput = document.getElementById("value_" + i);

    if (valueInput.value !== correctAnswers[i - 1].value.toString()) {
      return false;
    }
  }
  return true;
}

// Initialize the game with rows
const tableBody = document.querySelector("tbody");
for (let i = 1; i <= 10; i++) {
  const row = createRow(i);
  tableBody.appendChild(row);
}

