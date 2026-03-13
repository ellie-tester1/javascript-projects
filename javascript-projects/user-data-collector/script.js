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



function getUserData() {
    const userDataArray = [];

    for (let i = 0; i < 3; i++) { 
        const name = prompt("Enter user name:");
        const age = prompt("Enter user age:");
        const email = prompt("Enter user email:");

        const userData = {
            name: name,
            age: age,
            email: email
        };

        userDataArray.push(userData);
    }

    return userDataArray;
}
const users = getUserData();
console.log(users)