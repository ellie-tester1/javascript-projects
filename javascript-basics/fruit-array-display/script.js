// let arr = [1,2,3,4,5,{key:"value"},true, undefined,null,["text",[],[[]]], ]
// let arr2 =["text",1,2,3,true]
// let arr3 = [...arr2]
//  console.log(arr3, arr2);

// const obj = {
//     log2:(param)=>{
// return param[param.length - 1]
//     }
    
// }
//  console.log(window.console);


// let a = 4;
// let flowers =['Rose', 'Carnation', 'Orchids', 'Tulip'];

// function manipulateArray(number, array)
//  { if (number === 1) { array.push("Rose");
//  } else if (number === 2) { array.unshift("Carnation"); 
// } else if (number === 3) { array.pop(Orchids); } 
// else if (number === 4) { array.shift(Tulip); } 
// else { console.log(" "); } 
// return array;}


// function getUserData() {
//     var name = prompt("name:"); 
//     var age = prompt("age:"); 
//     var email = prompt("email:");  
//     var user = { 
//         name: name, 
//         age: age, 
//         email: email 
//     }; 
//     return [user]; 
//  } 
//  console.log(getUserData());

//HOMEWORK

function modifyArray(choice, array, word) {
    if (choice === 1) {
        array.push(word);
    } else if (choice === 2) {
        array.unshift(word);
    } else if (choice === 3) {
        array.pop();
    } else if (choice === 4) {
        array.shift();
    }
    return array;
}


let myArray = ["apple", "banana", "cherry"];
let modifiedArray = modifyArray(1, myArray, "orange");
console.log(modifiedArray);

