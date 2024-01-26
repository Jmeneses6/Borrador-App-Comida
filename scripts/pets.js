import { PETS } from "../helpers/url.js";

let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputRaza = document.getElementById("raza");
let inputDescription = document.getElementById("description");
let inputLocation = document.getElementById("location")

let infoPets = JSON.parse(sessionStorage.getItem("infoPets"));

document.addEventListener("DOMContentLoaded", () => {
    const { name, age, raza, description, location } = infoPets;

    inputAge.value = age;
    inputName.value = name;
    inputRaza.value = raza;
    inputDescription.value = description;
    inputLocation.value = location;

});

