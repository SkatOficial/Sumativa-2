import { crearUnaCarta } from "./creacionTarjeta.js";

export const buscarUnAuto = async (auto) => {
                                
    let galeriaAutos = document.getElementById("galeriaAutos");
    galeriaAutos.innerHTML = '';

    console.log(auto);

    if(auto){        
        crearUnaCarta(auto);
    }else{
        return;
    }
};