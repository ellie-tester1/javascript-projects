
import { data } from "./data.js";

let root = document.getElementById('root')

data.map ((item)=>{
    root.innerHTML += `
    <div class="cards">
        <img src="${item.image}" alt="">
        <h2>${item.nameRegion}</h2>
        <p>${item.desc}</p>
        <div class="cards__bot">
            <span>${item.population}</span>
        </div>
    </div>
    `
} )