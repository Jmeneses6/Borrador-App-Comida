import { GUAD } from "../helpers/url.js";
import { GetData } from "../helpers/peticiones.js";

const template = document.getElementById("template").content;
const containers = document.getElementById("cards");

document.addEventListener("DOMContentLoaded", async () => {
    const response = await GetData(GUAD);

    let fragment = document.createDocumentFragment();
    response.forEach((item) => {
        const {
            id,
            name,
            price,
            image,
        } = item;
        
        template.querySelector("img").setAttribute("src", image);
        template.querySelector("img").setAttribute("alt", name);
        template.querySelector("h1").textContent = name;
        template.querySelector("p").textContent = price;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    containers.appendChild(fragment);
})



