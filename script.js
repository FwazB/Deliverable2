// When the 'Start Game' button is clicked
function startGame() {
  var userName = document.getElementById("userName").value; // Get the user's name
  var holes = document.getElementById("holeCount").value; // Get the number of holes
  var puttsInputs = document.getElementById("puttsInputs");
  puttsInputs.innerHTML = ""; // Clear any previous inputs

  // Create input fields for the number of putts for each hole
  for (var i = 1; i <= holes; i++) {
    puttsInputs.innerHTML +=
      "Hole " + i + ' putts: <input type="number" id="putt' + i + '"><br>';
  }

  // Make the 'Calculate Total Par' button visible
  document.getElementById("calculateButton").style.display = "inline";
}

document.getElementById("startButton").onclick = startGame; // Assign the function to the button

// When the 'Calculate Total Par' button is clicked
function calculateScore() {
  var userName = document.getElementById("userName").value; // Get the user's name again
  var holes = document.getElementById("holeCount").value; // Get the number of holes again
  var totalScore = 0;

  // Calculate the total score based on user inputs
  for (var i = 1; i <= holes; i++) {
    var putts = document.getElementById("putt" + i).value; // Get the number of putts for each hole
    totalScore += putts ? parseInt(putts) : 3; // Add to total score, default to 3 if no input
  }

  var par = 3 * holes; // Calculate the total par
  var scoreDifference = totalScore - par; // Calculate the difference
  var message = "";

  // Decide the message based on the score difference
  if (scoreDifference === 0) {
    message = "Good game, " + userName + ". Your total par was: 0.";
  } else if (scoreDifference > 0) {
    message =
      "Nice try, " +
      userName +
      "... Your total par was: +" +
      scoreDifference +
      ".";
  } else {
    message =
      "Great job, " +
      userName +
      "! Your total par was: " +
      scoreDifference +
      ".";
  }

  // Show the result message and log it to the console
  document.getElementById("result").textContent = message;
  console.log(message);
}

document.getElementById("calculateButton").onclick = calculateScore; // Assign the function to the button
