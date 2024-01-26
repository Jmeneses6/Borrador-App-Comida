//!Creación de constante que contiene la url a la cual se le realizara el get de manera asíncrona
const GetData = async (url)=>{
    //!Desestructura y extrae la data de la URL
    const {data} = await axios.get(url)
    //!Muestra lo que tenga data
    return data
}
//!Exportar sin llaves
export default GetData
