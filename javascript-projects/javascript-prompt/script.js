let a = 123
let b = "string"
let boolean = true // false
let c = null
let d = undefined
let myCity ={
    name:"Osh",
    age: 3023,
    image:"https://sputnik.kg/img/104442/04/1044420415_0:23:3073:1760_2072x0_60_0_0_dd2fae90da7589f13868f3a648442092.jpg",
    population: 60000,
    mountain:{
        height:400,
        name:"Sulaiman",
        museum:true,
    }

}
myCity.age = 3023
console.log(myCity)

document.getElementById('root').innerHTML +=`
<img src="${myCity.image}" alt="">
    <h2>${myCity.name}</h2>
<p> Age: ${myCity.age}</p>
<span>Population: ${myCity.population}</span>`

let number = 1
let string = "string"
let bool = true

console.log(Number("123"));
console.log(String({}));
console.log(Boolean(-1));

let years = prompt("Write your year of birth")
let firstName = prompt("Write your Name")
let surname = prompt("Write your Surname")


alert(` ${firstName}, ${surname}, Your Age ${ 2023 - years} `)

let dollar = prompt("write dollar")
alert(`    ${ dollar *89 } soms`)

//Homework
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// const result = factorial(5);
// console.log("Факториал числа 5:", result);

// const myNameArray = ['E', 'L', 'N', 'U', 'R', 'A'];

// myNameArray.forEach(letter => console.log(letter));