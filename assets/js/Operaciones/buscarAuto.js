import { crearUnaTarjeta } from "./creacionTarjeta.js";

export const buscarUnAuto = async (auto) => {
                    
    //Manejo de expeciones
    if(auto.length === 0){
        console.log(auto)
        return
    }

    //Comportamiento normal
    let galeriaAutos = document.getElementById("galeriaAutos");
    galeriaAutos.innerHTML = '';

    crearUnaTarjeta(auto);
};