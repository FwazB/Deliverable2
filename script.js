function startGame() {
  var userName = document.getElementById("userName").value;
  var holes = document.getElementById("holeCount").value;
  var puttsInputs = document.getElementById("puttsInputs");
  puttsInputs.innerHTML = "";

  for (var i = 1; i <= holes; i++) {
    puttsInputs.innerHTML +=
      "Hole " + i + ' putts: <input type="number" id="putt' + i + '"><br>';
  }

  document.getElementById("calculateButton").style.display = "inline";
}

document.getElementById("startButton").onclick = startGame;

function calculateScore() {
  var userName = document.getElementById("userName").value;
  var holes = document.getElementById("holeCount").value;
  var totalScore = 0;

  for (var i = 1; i <= holes; i++) {
    var putts = document.getElementById("putt" + i).value;
    totalScore += putts ? parseInt(putts) : 3;
  }

  var par = 3 * holes;
  var scoreDifference = totalScore - par;
  var message = "";

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

  document.getElementById("result").textContent = message;
  console.log(message);
}

document.getElementById("calculateButton").onclick = calculateScore;
