import { crearTarjetas } from "./dibujaAutos.js";

export const validaAutos = async (autos) => {
    //Manejo de expeciones
    if(autos.length === 0){//no se encontraron automoviles
        console.warn("no se ecnontraron automoviles")
        return
    }

    //Comportamiento normal
    let galeriaAutos = document.getElementById("galeriaAutos");
    galeriaAutos.innerHTML = '';

    crearTarjetas(autos);
};