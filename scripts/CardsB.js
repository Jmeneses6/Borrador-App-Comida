import { BEBIDA } from "../helpers/url.js";
import { GetData } from "../helpers/peticiones.js";

const templateB = document.getElementById("templateB").content;
const containersB = document.getElementById("cardsB");

document.addEventListener("DOMContentLoaded", async () => {
    const responseB = await GetData(BEBIDA);

    let fragmentB = document.createDocumentFragment();
    responseB.forEach((itemB) => {
        const {
            id,
            name,
            price,
            image,
        } = itemB;
        
        templateB.querySelector("img").setAttribute("src", image);
        templateB.querySelector("img").setAttribute("alt", name);
        templateB.querySelector("h1").textContent = name;
        templateB.querySelector("p").textContent = price;
        
        const cloneB = templateB.cloneNode(true);
        fragmentB.appendChild(cloneB);
    });
    containersB.appendChild(fragmentB);
})

