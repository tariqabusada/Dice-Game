//DOM Functions
const selector = (select) => {
  return document.querySelector(select);
};
const creatElement = (ele) => {
  return document.createElement(ele);
};
const appendElement = (parent, child) => {
  return parent.appendChild(child);
};
const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

// Player name
const player1TotalScore = document.querySelector("#p1TotalScore");
const player1CurentScore = document.querySelector("#p1CurentScore");
const player2TotalScore = document.querySelector("#p2TotalScore");
const player2CurentScore = document.querySelector("#p2CurentScore");
const rollBtn = document.querySelector("#rollBtn");
const newBtn = document.querySelector("#newBtn");
const holdBtn = document.querySelector("#holdBtn");
const img = document.querySelector("#img");

let assignedPlayer = 0;

const players = [
  {
    name: "Tariq",
    id: 1,
    currentScore: 0,
    totalScore: 0,
  },
  {
    name: "Rami",
    id: 2,
    currentScore: 0,
    totalScore: 0,
  },
];

function resetValues() {
  for (let i in players) {
    players[i].currentScore = 0;
    players[i].totalScore = 0;
  }
  player1TotalScore.textContent = '0';
  player1CurentScore.textContent = '0';
  player2TotalScore.textContent = '0';
  player2CurentScore.textContent = '0';
  document.querySelector("#heading").textContent = "Let's Play";
  assignedPlayer = 0;
  rollBtn.disabled = false;
}

newBtn.addEventListener("click", resetValues);
holdBtn.addEventListener("click", () => {
  players[assignedPlayer].currentScore = 0;
  assignedPlayer = assignedPlayer === 1 ? 0 : 1;
  document.querySelector('#turn').textContent = assignedPlayer === 0 ? 'Tariq turn' : 'Rami turn'
});

// random number
function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

// check num if one
function checkNumIfOne(num) {
  if (num === 1) {
    assignedPlayer = assignedPlayer === 1 ? 0 : 1;
    document.querySelector('#turn').textContent = assignedPlayer === 0 ? 'Tariq turn' : 'Rami turn'
  }
}

// check winner
function checkWinner() {
  if (players[assignedPlayer].totalScore >= 30) {
    rollBtn.disabled = true;
    document.querySelector(
      "#heading"
    ).textContent = `${players[assignedPlayer].name} Won`;
  }
}

// Edit Dom Elements
function editElements() {
  player1TotalScore.textContent = players[0].totalScore;
  player1CurentScore.textContent = players[0].currentScore;
  player2TotalScore.textContent = players[1].totalScore;
  player2CurentScore.textContent = players[1].currentScore;
}

// Roll Function
function roll() {
    console.log('rolllllll')
  // random number
  const num = randomNum();

  img.src = `assets/dice${num}.png`;
  players[assignedPlayer].currentScore = num;
  players[assignedPlayer].totalScore += num;

  // check num if one
  checkNumIfOne(num);

  // Edit Dom Elements
  editElements();

  // check winner
  checkWinner();
}
rollBtn.addEventListener("click", roll);

