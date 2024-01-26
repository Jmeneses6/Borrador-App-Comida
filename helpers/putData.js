  //!Realiza un try para el la url a la que se enviaran la solicitud y los datos enviados con put 
  //!mediante Axios y espera a que se cumpla antes
  //!de proseguir con await, manda al perfil que inicio sesión y muestra un mensaje,
  //!en caso de haber una excepción manda error en consola.
const PutData = async (url, datos) => {
  try {
    await axios.put(url, datos);
    window.location.href = "../index/profile.html";
    alert("Usuario Actualizado Correctamente");
  } catch (error) {
    console.log(error);
  }
};
//!Exportar sin llaves
export default PutData;
