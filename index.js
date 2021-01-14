let playerWin = 0
let computerWin = 0

// TODO: Need an event listener
// When a button is clicked, do something
const btnRock = document.querySelector('#btn-rock')
btnRock.addEventListener('click', () => {
  const playerChoice = 'rock'
  const computerChoice = computerPlay()
  const playerImage = `./${playerChoice}.png`
  const computerImage = `./${computerChoice}.png`

  playSingleRound(playerChoice, computerChoice)
  document.getElementById('player-image').src = playerImage
  document.getElementById('computer-image').src = computerImage
})

const btnPaper = document.querySelector('#btn-paper')
btnPaper.addEventListener('click', () => {
  const playerChoice = 'paper'
  const computerChoice = computerPlay()
  const playerImage = `./${playerChoice}.png`
  const computerImage = `./${computerChoice}.png`

  playSingleRound(playerChoice, computerChoice)
  document.getElementById('player-image').src = playerImage
  document.getElementById('computer-image').src = computerImage
})

const btnScissors = document.querySelector('#btn-scissors')
btnScissors.addEventListener('click', () => {
  const playerChoice = 'scissors'
  const computerChoice = computerPlay()
  const playerImage = `./${playerChoice}.png`
  const computerImage = `./${computerChoice}.png`

  playSingleRound(playerChoice, computerChoice)
  document.getElementById('player-image').src = playerImage
  document.getElementById('computer-image').src = computerImage
})

// TODO: write a function that plays 5 round game
// that keeps score and reports win/lose at the end
function game() {
  let playerWin = 0
  let computerWin = 0

  for (let i = 0; i < 5; i++) {
    const playerInput = prompt('Rock, paper, or scissors?')
    const round = playSingleRound(playerInput, computerPlay())

    if (round.indexOf('Win') !== -1) playerWin++
    else if (round.indexOf('Lose') !== -1) computerWin++

    console.log(round)
  }

  console.log(`Player score: ${playerWin}`)
  console.log(`Computer score: ${computerWin}`)
  if (playerWin > computerWin) console.log('You Win!')
  else if (playerWin < computerWin) console.log('You Lose!')
  else console.log('Tie!')
}

// TODO: write a function that plays a single round of Rock Paper Scissors
function playSingleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  // player wins
  if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  ) {
    playerWin++
    document.getElementById(
      'player-score'
    ).textContent = `You: ${playerWin} points`
    if (playerWin === 5) {
      document.getElementById('header-tag').textContent = 'Yay! You Win!'
      terminateGame()
    }
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }

  // computer wins
  if (
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors')
  ) {
    computerWin++
    document.getElementById(
      'comp-score'
    ).textContent = `You: ${computerWin} points`
    if (computerWin === 5) {
      document.getElementById('header-tag').textContent = 'Oh No! You Lose!'
      terminateGame()
    }
    return `You Win! ${computerSelection} beats ${playerSelection}`
  }

  // tie
  return "It's a tie!"
}

// TODO: add a feature when player/computer wins, something happens
function terminateGame() {
  const btnRock = document.getElementById('btn-rock')
  const btnPaper = document.getElementById('btn-paper')
  const btnScissors = document.getElementById('btn-scissors')
  btnRock.remove()
  btnPaper.remove()
  btnScissors.remove()

  const container = document.querySelector('.btn-selection')
  const btnPlayAgain = document.createElement('button')
  btnPlayAgain.textContent = 'Play Again'

  container.appendChild(btnPlayAgain)

  btnPlayAgain.onclick = () => window.location.reload()
}

// TODO: randomly return 'Rock' 'Paper' or 'Scissors'
// Refactor: arrays might look cleaner
function computerPlay() {
  switch (getRandomInt(1, 3)) {
    case 1:
      return 'rock'
      break
    case 2:
      return 'paper'
      break
    case 3:
      return 'scissors'
      break
    default:
      return 'something terribly wrong happened'
  }
}

// the max & min are inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
