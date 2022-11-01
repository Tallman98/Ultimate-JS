/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = { computer: 0, player: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == " Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const result = document.getElementById("result");
  const hands = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");

  if (score == -1) {
    result.innerText = "You Lose";
  } else if (score == 1) {
    result.innerText = "You Win";
  } else {
    result.innerText = "It's a tie";
  }
  hands.innerText = `Human: ${playerChoice} vs Computer: ${computerChoice}`;
  playerScore.innerText = `Your Score: ${totalScore["player"]}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const result = getResult(playerChoice, computerChoice);
  console.log({ result });
  showResult(result, playerChoice, computerChoice);
  totalScore["player"] += result;
  console.log(totalScore);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  const buttons = document.querySelectorAll(".rpsButton");
  buttons.forEach((button) => {
    button.onclick = () => onClickRPS(button.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const result = document.getElementById("result");
  const hands = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");

  result.innerText = " ";
  hands.innerText = " ";
  playerScore.innerText = " ";
}

playGame();
endGame();
