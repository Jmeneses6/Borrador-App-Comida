//!Importar datos
import Postdata from "/helpers/postData.js";
import { USER } from "/helpers/url.js";

//!Selecciona el primer form el cual contendrá la información dada
const form = document.querySelector("form");

//!Espera el submit del form y con el "async" automáticamente crea las 3 variables y un objeto de datos con 
//!los datos antes pedidos en el form y un id generado aleatoriamente
form.addEventListener("submit", async (e) => {  
e.preventDefault();

  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  
  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };
  //!Se envían los datos de la variable (objUser) a la url de la constante USER  
  //!y se usa await para esperar que la promesa de la variable Postdata se resuelva antes de continuar
  await Postdata(USER, objUser);

});


