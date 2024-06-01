import { crearTarjetas } from "./creacionTarjeta.js";

export const buscarAutos = async (auto) => {
                    
    //Manejo de expeciones
    if(auto.length === 0){
        console.log(auto)
        return
    }

    //Comportamiento normal
    let galeriaAutos = document.getElementById("galeriaAutos");
    galeriaAutos.innerHTML = '';

    crearTarjetas(auto);
};