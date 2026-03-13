import { data } from "./data.js" 
let root = document.getElementById('root')


// for( let i = 0; i<data.length; i++ ){
//  root.innerHTML += `
//   <div class="cards">
//  <img src="${data[i].image}" alt="">
//  <h2>${data[i].namePhone}</h2>
//  <p>${data[i].title}</p>
//  <p>${data[i].desc}</p>
//  <div class="cards_bot">
//      <b>${data[i].price}</b><span>${data[i].count}</span>
//  </div>
//  </div>
//  `
//     }

  
   
    data.map((item)=>{ 
        root.innerHTML += ` 
        <div class="cards"> 
        <img src="${item.image}" alt=""> 
        <h2>${item.namePhone}</h2> 
        <p>${item.desc.substring(0, 50)}...</p> 
        <p>${item.title.substring(0, 40)}...</p> 
        <div class="cards__bot"> 
            <b>$${item.price}</b><span>количество: ${item.count}</span> 
        </div> 
    </div> 
    ` 
    })
    