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


let a = 4;
let flowers =['Rose', 'Carnation', 'Orchids', 'Tulip'];

function manipulateArray(number, array)
 { if (number === 1) { array.push("Rose");
 } else if (number === 2) { array.unshift("Carnation"); 
} else if (number === 3) { array.pop(); } 
else if (number === 4) { array.shift(); } 
else { console.log(" "); } 
return array;
}
console.log(manipulateArray(1, flowers));




