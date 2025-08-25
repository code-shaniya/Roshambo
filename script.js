const choiceBtn = document.querySelectorAll(".choice-btn");

const playerChoiceTxt = document.querySelector(".player-choice-txt");
const botChoiceTxt = document.querySelector(".bot-choice-txt");

const gameTitle = document.querySelector(".game-title");

const scoreWonTxt = document.querySelector(".score-won-txt")
const scoreDrawTxt = document.querySelector(".score-draw-txt")
const scoreLostTxt = document.querySelector(".score-lost-txt")

let playerResultValue = "";
let botResultValue = "";

const choiceEmoji = {
  rock: "✊",
  paper: "✋",
  scissor: "✌️️️",
};

choiceBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    choiceBtn.forEach(btn => {
      btn.style.pointerEvent = "none";
    })
    
    gameTitle.textContent = "Let's Play!";
    
    playerChoiceTxt.textContent = "✊";
    botChoiceTxt.textContent = "✊";
    
    playerResultValue = btn.value;
    botResultValue = getBotResultValue();
    
    playerChoiceTxt.classList.add("player-choice-txt-animate");
    botChoiceTxt.classList.add("bot-choice-txt-animate");
    
    setTimeout(() => {
      playerChoiceTxt.textContent = choiceEmoji[playerResultValue];
      botChoiceTxt.textContent = choiceEmoji[botResultValue];
      
      playerChoiceTxt.classList.remove("player-choice-txt-animate");
      botChoiceTxt.classList.remove("bot-choice-txt-animate");
      
      showResultGame();
      
      choiceBtn.forEach(btn => {
      btn.style.pointerEvent = "visible";
      })
    }, 3000)
  });
});

function getBotResultValue() {
  const botOptionChoice = ["rock", "paper", "scissor"];
  const botRandomChoice = botOptionChoice [Math.floor(Math.random() * botOptionChoice.length)];
  return botRandomChoice;
}

function showResultGame() {
  if (playerResultValue  == botResultValue) {
    gameTitle.textContent = "Draw!";
    scoreDrawTxt.textContent++
  } else if (
    playerResultValue == "rock" && botResultValue == "scissor" ||
    playerResultValue == "paper" && botResultValue == "rock" ||
    playerResultValue == "scissor" && botResultValue == "paper"
    ) {
      gameTitle.textContent = "You Won!";
      scoreWonTxt.textContent++
    } else {
      gameTitle.textContent = "You Lost!";
      scoreLostTxt.textContent++
    }
}