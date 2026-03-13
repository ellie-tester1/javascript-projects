// Arrays
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

const evenNumbersArray = filterEvenNumbers(numbersArray);
console.log(evenNumbersArray);

// Objects
let name = "Elnura";
let surname = "Musaeva";
let age = 37;
let country = "Kyrgyzstan";

let aboutMe = `My name is ${name} ${surname}. I am ${age} years old and I am from ${country}.`;
console.log(aboutMe);

// Loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// Events
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button clicked");
});