// alert('hi')

const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

const billCalculate = () => {
   // get bill from user input & convert it into a number
   bill = Number(billTotalInput.value);

   // get the tip from user & convert it into a percentage (divide by 100)
   tip = Number(tipInput.value) / 100;

   // get the number of people and convert it into a number
   people = Number(numberOfPeople.innerText);

   // get the tip percent (or tip total [JUST TIP])
   tipPercent = bill * tip;

   // calculate the total bill factoring in the number of people that are paying the bill
   total = (bill + tipPercent) / people;

   // output to the webpage
   perPersonTotal.innerText = total.toFixed(2);

}

people = 0;

const increasePeople = () => {
   //increase the number of people
   people++;
   // update the number of people in the DOM 
   numberOfPeople.innerText = people
   // recalculate based on the new number of people 
   billCalculate()
}

const decreasePeople = () => {
   //GUARD CLAUSE
   // Simply RETURN if the number of people is one. You can't have 0 or a negative number
   if (people <= 1) {
      alert(`You cannot have less than one person, Who's gonna pay the bills?`)
      return
   } else {
      // decrease the number of people
      people--
      // update the number of peope in the DOM 
      numberOfPeople.innerText = people
      // recalculate the bill based on the number of people 
      billCalculate()
   }
}