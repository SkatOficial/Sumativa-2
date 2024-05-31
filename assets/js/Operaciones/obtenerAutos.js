export const obtenerAutos = async() => {
    try {
        const response = await fetch('https://autos-rdbd.onrender.com/api/autos');
        const data =  await response.json();
        return data
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}