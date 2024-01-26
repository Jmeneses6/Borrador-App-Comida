//!Creación de constante que contiene la url a la cual se le realizara el delete de manera asíncrona
const DeleteData = async (url) => {
  //!Realiza un try para la eliminación de datos a la url con delete mediante Axios y espera a que se cumpla 
  //!antes de proseguir con await, en caso de haber una excepción manda error en consola.
  try {
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  }
};
//!Exportar sin llaves
export default DeleteData;