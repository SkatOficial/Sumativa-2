import { crearTarjetas } from "./creacionTarjetas.js";

export const validaAutos = async (auto) => {
    //Manejo de expeciones
    if(auto.length === 0){//no se encontraron automoviles
        console.warn("no se ecnontraron automoviles")
        return
    }

    //Comportamiento normal
    let galeriaAutos = document.getElementById("galeriaAutos");
    galeriaAutos.innerHTML = '';

    crearTarjetas(auto);
};