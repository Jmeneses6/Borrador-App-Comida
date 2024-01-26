  //!Se define la constante Postdata y toma la url a donde se van a enviar los datos
  //!y los datos que se enviarán.y se declara asíncrona.
const Postdata = async (url, datos) => {

  //!Realiza un try para el envío de datos a la url con post mediante Axios y espera a que se cumpla antes
  //!de proseguir con await, en caso de haber una excepción manda error en consola.  
  try {
    await axios.post(url, datos);
    window.location.href = "../index/login.html";
    alert("Usuario Creado exitosamente");
  } catch (error) {
    console.log(error);
  }
};
//!Exportar sin llaves
export default Postdata;