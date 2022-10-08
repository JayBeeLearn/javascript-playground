

var yname = document.getElementById('name');
var age = document.getElementById('age');
var answer = document.getElementById('answer');
var year = 2022;

yname.addEventListener('input', ageIn);
age.addEventListener('input', ageIn);

function ageIn() {
   myname = (yname.value) || Guest;
   myage = parseFloat(age.value) || 0;

   agedays = (year - myage) * 365;


   answer.innerHTML = myname + ' ' + "You are" + ' ' + agedays + ' ' + "days old";
}


// By the way task, generates random number between 0 - 9
function rannom() {
   arry = ['rock', 'paper', 'scissors'];
   ranno = arry[Math.floor(Math.random() * 3)];
   answe = document.getElementById('answe');

   answe.innerHTML = ranno;
}


function rpsGame(yourChoice) {
   // console.log('Your Choice:' + ' ' + yourChoice.id);
   var humanChoice, botChoice;

   humanChoice = yourChoice.id;

   botChoice = numberToChoice(randtoRpsInt());
   // console.log('Computer Choice:' + ' ' + botChoice);

   result = decideWinner(humanChoice, botChoice)
   // console.log(result);

   message = finalMessage(result);
   // console.log(message.message);

   rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randtoRpsInt() {
   return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
   return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, botChoice) {
   var rpsDatabase = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
      'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
   };

   var yourScore = rpsDatabase[yourChoice][botChoice];
   var botScore = rpsDatabase[botChoice][yourChoice];

   return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
   if (yourScore == 0) {
      return { 'message': 'You lost!', 'color': 'red' };
   } else if (yourScore == 0.5) {
      return { 'message': 'You tied!', 'color': 'yellow' };
   } else {
      return { 'message': 'You Won!', 'color': 'green' };
   }


}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
   var imageDatabase = {
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors': document.getElementById('scissors').src
   }

   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

   var humanDiv = document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');

   humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=120 width=110 style='box-shadow: 0px 15px 50px rgba(37, 50, 233, 1);'>"

   botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=120 width=110 style='box-shadow: 0px 15px 50px rgba(243, 38, 24, 1);'>"

   messageDiv.innerHTML = "<h1 style=color:" + finalMessage['color'] + "; font-size:60px; padding:10px>" + finalMessage['message'] + "</h1>"

   document.getElementById('rps-box').appendChild(humanDiv);
   document.getElementById('rps-box').appendChild(messageDiv);
   document.getElementById('rps-box').appendChild(botDiv);
}


// Challenge Four 
// Colour Change

var allButtons = document.getElementsByTagName('button');

var copyOfAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
   copyOfAllButtons.push(allButtons[i].classList[1]);
   console.log(copyOfAllButtons);
}

// console.log(allButtons[].classList);

function colourButtonChange(butty) {
   if (butty.value === 'red') {
      changeToRed();
   } else if (butty.value === 'blue') {
      changeToBlue();
   } else if (butty.value === 'reset') {
      resetColour();
   } else if (butty.value === 'random') {
      randomColour();
   }
}

function changeToRed() {
   for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove(allButtons[i].classList[1]);
      allButtons[i].classList.add('btn-danger');
   }
}

function changeToBlue() {
   for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove(allButtons[i].classList[1]);
      allButtons[i].classList.add('btn-primary');
   }
}

function resetColour() {
   for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove(allButtons[i].classList[1]);
      allButtons[i].classList.add(copyOfAllButtons[i]);
   }
}

function randomColour() {
   let choices = ['btn-primary', 'btn-warning', 'btn-info', 'btn-success']
   for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove(allButtons[i].classList[1]);

      allButtons[i].classList.add(choices[Math.floor(Math.random() * 4)])

   }

}


//Challenge Five BLACK JACK 

let blackjackGame = {
   'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
   'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
   'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
   'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
   'wins': 0,
   'losses': 0,
   'draws': 0,
   'isStand': false,
   'turnsOver': false,
}
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3')
const lossSound = new Audio('sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
   if (blackjackGame['isStand'] === false){
      let card = randomCard();
      console.log(card);
      showCard(card, YOU);
      updateScore(card, YOU);
      showScore(YOU);
   }
}

function showCard(card, activePlayer) {
   if (activePlayer['score'] <= 21) {
      let cardImage = document.createElement('img');
      cardImage.src = `images/${card}.png`;
      document.querySelector(activePlayer['div']).appendChild(cardImage);
      hitSound.play();
   }
}

function blackjackDeal() {
   // can only work if all the turns are over
   if (blackjackGame['turnsOver'] === true){
      // deactivates hit button
      blackjackGame['isStand'] = false;
      // gets all images in my box
      let yourImages = document.querySelector('#your-box').querySelectorAll('img');
      // gets all the images in dealer's box
      let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

      // removes all my images
      for (i = 0; i < yourImages.length; i++) {
         yourImages[i].remove();
      }

      // removes all dealer's images
      for (i = 0; i < dealerImages.length; i++) {
         dealerImages[i].remove();
      }


      YOU['score'] = 0;
      DEALER['score'] = 0;

      document.querySelector('#your-blackjack-result').textContent = 0;
      document.querySelector('#your-blackjack-result').style.color = 'white';

      document.querySelector('#dealer-blackjack-result').textContent = 0;
      document.querySelector('#dealer-blackjack-result').style.color = 'white';

      document.querySelector('#blackjack-result').textContent = `Let's Play`;
      document.querySelector('#blackjack-result').style.color = 'black';
   }
   blackjackGame['turnsOver'] = false;
}

function randomCard() {
   let randomIndex = Math.floor(Math.random() * 13);
   // going through the BLACKJACKGAME OBJECT using the function above to randomly access
   return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
   if (card === 'A') {
      // if adding 11 keeps me below 21 add 11. Otherwise add 1
      if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
         activePlayer['score'] += blackjackGame['cardsMap'][card][1];
      } else {
         activePlayer['score'] += blackjackGame['cardsMap'][card][0];
      }
   } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card];
   }
}

function showScore(activePlayer) {
   // Burst logic in score
   if (activePlayer['score'] > 21) {
      document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
      document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
   } else {
      document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
   }
}

// Async function
function sleep(ms){
   return new Promise(resolve => setTimeout(resolve, ms));
}

//creating a dealer function
async function dealerLogic() {
   blackjackGame['isStand'] = true;

   while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
      let card = randomCard();
      showCard(card, DEALER);
      updateScore(card, DEALER);
      showScore(DEALER);
      await sleep(1000);
   }
   blackjackGame['turnsOver'] = true;
   showResult(computeWinner());
}

function computeWinner() {
   let winner;

   if (YOU['score'] <= 21) {
      //condition: higher score than dealer or when dealer busts but you are 21 or under
      // wins
      if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
         winner = YOU;
         blackjackGame['wins']++;
         document.querySelector('#wins').textContent = blackjackGame['wins'];
         
      // losses
      } else if (YOU['score'] < DEALER['score']) {
         winner = DEALER;
         blackjackGame['losses']++;
         document.querySelector('#losses').textContent = blackjackGame['losses'];

         // draws
      } else if (YOU['score'] === DEALER['score']) {
         blackjackGame['draws']++;
         console.log(blackjackGame['draws']);
         document.querySelector('#draws').textContent = blackjackGame['draws'];
      }

      // condition: when user bust but dealer doesn't
      // loss
   } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      blackjackGame['losses']++;
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      winner = DEALER;

      // condition: when you and the dealer bust
      // draw
   } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
      blackjackGame['draws']++;
      document.querySelector('#draws').textContent = blackjackGame['draws'];
   }

   // console.log('winner is ', winner);
   return winner;
}

function showResult(winner) {
   if (blackjackGame['turnsOver'] = true){
      let message, messageColour;
      if (winner === YOU) {
         message = 'You Won!';
         messageColour = 'green';
         winSound.play();

      } else if (winner === DEALER) {
         message = 'You lost';
         messageColour = 'red';
         lossSound.play();

      } else {
         message = 'You drew';
         messageColour = 'yellow';
      }

      document.querySelector('#blackjack-result').textContent = message;
      document.querySelector('#blackjack-result').style.color = messageColour;
   }
}

function botLogic() {
   
}
