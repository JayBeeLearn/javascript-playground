
function sortDoc() {
   document.getElementById('sum').textContent = 'Correct';
   // window.print();
}

// document.getElementById('sum').innerHTML = 'Correct';
document.querySelector('#sum').innerHTML = 'Correct Man, keep trying';

const letterCount = () => {
   const sentence = 'Hey You, wanna check out my code to see what I am doing?'
   for (words in sentence) {
      //   console.log(words);
   }
}

letterCount();

let fruit = ['mango', 'apple', 'orange', 'quava', 'salad', 'banana']
// console.log(fruit[4]);
for (i = 0; i < fruit.length; i++) {
   // console.log(fruit[i])
}

const sumArray = (nums) => {
   let result = 0;
   for (i = 0; i < nums.length; i++) {
      result = result + nums[i];
   }
   document.querySelector('#sumArray').textContent = `The result is ${result}`;
   console.log(result);
}

nums = [];
for (i = 0; i < 5; i++) {
   // nums.push(Number(prompt('Enter number')))[i];
}

// console.log(nums)
// sumArray(nums);

//CHECKING THE FREQUENCY OF LETTERS IN A NUMBER
const letterFrequency = (phrase) => {
   frequency = {};
   //loop through the phrase that passes through the argument
   for (const letter of phrase) {
      //check if letter exist in the frequency - which was an empty object
      if (letter in frequency) {
         //increment the letter
         frequency[letter] = frequency[letter] + 1;
         //otherwise, set value to 1
      } else {
         frequency[letter] = 1;
      }
   }
   return frequency
}
phrase = 'JayBee,can,not,even,do,any,thing,about,the,even,can';
// phrase.split(',')
// console.log(letterFrequency(phrase.split(',')));

const filter = (number, greaterThan) => {
   result = []

   for (i = 0; i < number.length; i++) {
      if (number[i] > greaterThan) {
         result.push(number[i]);
      }
   }

   return result;
}
let number = [1, 2, 3, 4, 5, 6, 7];
// let greaterThan = Number(prompt('Enter greather Than'));
// console.log(filter(number, greaterThan))

let actors = [
   {
      name: 'Johny',
      networth: 5000,
      age: 35,
      car: 'Porsche'
   },

   {
      name: 'Debbie',
      networth: 20000,
      age: 15,
      car: 'Escalade'
   },

   {
      name: 'Scofield',
      networth: 80000,
      age: 30,
      car: 'Camry'
   }
]
for (i = 0; i < actors.length; i++) {
   actList = actors[i].networth
   getActors = actors.filter(actors => actors.networth > 1000).networth;
   // strAct.split(':')
   // document.querySelector('#actors').innerHTML = strAct;
   // console.log(actList)
}

// console.log(actors.reduce((a, b) => a + b.networth))

// console.log(document.querySelector('#act').innerText = 'Hoop !')

redBut = document.getElementById('redBut')
greenBut = document.getElementById('greenBut')
blueBut = document.getElementById('blueBut')

// redBut.onclick = () => console.log(redBut.value);
// greenBut.onclick = () => console.log(greenBut.value);
// blueBut.onclick = () => console.log(blueBut.value);


const allButtons = document.querySelectorAll('.colorButtons')
// for (i = 0; i < allButtons.length; i++)
//    buttonValue = allButtons[i].value

//    console.log(buttonValue)

const timeClicked = { 'red': 0, 'green': 0, 'blue': 0 }

allButtons.forEach(button => {
   button.onclick = () => {
      timeClicked[button.value] += 1;
      button.innerText = timeClicked[button.value]
   }
})

reset = document.querySelector('#reset')

reset.onclick = () => {
   timeClicked.red = 0;
   timeClicked.green = 0;
   timeClicked.blue = 0;

   allButtons.forEach(button => {
      button.innerText = ''})
}
