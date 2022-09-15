let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let perPersonTotalDiv = document.getElementById("perPersonTotal");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");

const calculateBill = () => {
  const newTotal = Number(billTotalInput.value);
  const newTip = Number(tipInput.value) / 100;
  console.log([newTotal, newTip]);

  const tipAmount = newTotal * newTip;
  const total = tipAmount + newTotal;
  const totalperPerson = total / Number(numberOfPeopleDiv.innerHTML);
  perPersonTotalDiv.innerText = `$${totalperPerson.toFixed(2)}`;
}

let numberOfPeople = Number(numberOfPeopleDiv.innerHTML);
const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerHTML = numberOfPeople;

  calculateBill();
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    throw "Hey you cannot have less than 1 person";
    return;
  }

  numberOfPeople -= 1;
  numberOfPeopleDiv.innerHTML = numberOfPeople;

  calculateBill();
}