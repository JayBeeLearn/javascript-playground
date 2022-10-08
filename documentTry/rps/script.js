function userClick(userChoice) {

   const rpsChoice = ['Rock', 'Paper', 'Scissors'];
   random = Math.floor(Math.random() * 3)


   humanChoice = userChoice.id;
   console.log(humanChoice)


   computerChoice = rpsChoice[random];
   console.log(computerChoice);

   resultContainer = document.getElementById('result')
   scoreContainer = document.getElementById('score')

   score = {
      humanWins: 0,
   }

   keeptrack = score.humanWins


   if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
      resultContainer.textContent = `You Won`
      resultContainer.style.color = 'green'
      score.humanWins++
      scoreContainer.textContent = score.humanWins;

   } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
      resultContainer.textContent = 'You Won'
      resultContainer.style.color = 'green'
      keeptrack+= 1;
      scoreContainer.textContent = keeptrack;

   } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
      resultContainer.textContent = 'You Won'
      resultContainer.style.color = 'green'
      keeptrack+= 1;
      scoreContainer.textContent = keeptrack;

   } else {
      resultContainer.textContent = 'Human Lost and Computer Won!!'
      resultContainer.style.color = 'red'
      keeptrack-= 1
      scoreContainer.textContent = keeptrack;

   }


}

// userClick(userChoice);
