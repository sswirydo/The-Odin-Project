



function checkVictory(a, b) {
  var rules = ["rock", "paper", "scissors"];
  let i = rules.indexOf(a);
  let j = rules.indexOf(b);
  if ((i % rules.length) == ((j + 1) % rules.length)) {
    return true;
  } else { return false; }
}

function getComputerChoice() {
  let answer = "";
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      answer = "rock";
      break;
    case 2:
      answer = "paper";
      break;
    case 3:
      answer = "scissors";
      break;
    default:
      throw "Unexpected value: randomGameObject()";
  }
  return answer;
}

function getHumanChoice() {
  return prompt("rock, paper or scissors", "rock");
}

function main() {
  let playerChoice = getHumanChoice();
  let aiChoice = getComputerChoice();

  if (playerChoice == aiChoice) {
    console.log("OK: " + playerChoice + " = " + aiChoice);
  }
  else {
    if (checkVictory(playerChoice, aiChoice)) {
      console.log("GG: " + playerChoice + " > " + aiChoice);
    }
    else {
      console.log("RIP: " + playerChoice + " < " + aiChoice);
    }
  }
}



main();