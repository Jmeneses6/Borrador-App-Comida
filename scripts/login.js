import GetData from "../helpers/getData.js";
import { USER } from "../helpers/url.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //!Espera la promesa de GetData para proseguir y guarda en data lo obtenido de url.js
  let data = await GetData(USER);

  //!Recorre cada uno de los elementos de data, verifica que data no sea nulo y realiza el condicional para dar acceso con email y password
  data?.forEach((element) => {
    if (email === element.email && password === element.password) {
      let dataUser = element;
      sessionStorage.setItem("infoUser", JSON.stringify(dataUser)); //!Almacena la info en sesión y de tipo json

      form.reset();
      window.location.href = "../index/profile.html";
      alert("Bienvenido!!")
    } 
      //!MOSTRAR: (CREDENCIALES INCORRECTAS) AL INTRODUCIR DATOS INCONGRUENTES
      //else if (email != element.email && password != element.password); {
      //form.reset();
      //alert("Credenciales Incorrectas");
      //}
  });
});

