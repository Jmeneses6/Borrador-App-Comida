import { TAMAL } from "../helpers/url.js";
import { GetData } from "../helpers/peticiones.js";

const templateT = document.getElementById("templateT").content;
const containersT = document.getElementById("cardsT");

document.addEventListener("DOMContentLoaded", async () => {
    const responseT = await GetData(TAMAL);

    let fragmentT = document.createDocumentFragment();
    responseT.forEach((itemT) => {
        const {
            id,
            name,
            price,
            image,
        } = itemT;
        
        templateT.querySelector("img").setAttribute("src", image);
        templateT.querySelector("img").setAttribute("alt", name);
        templateT.querySelector("h1").textContent = name;
        templateT.querySelector("p").textContent = price;
        const cloneT = templateT.cloneNode(true);
        fragmentT.appendChild(cloneT);
    });
    containersT.appendChild(fragmentT);
})

