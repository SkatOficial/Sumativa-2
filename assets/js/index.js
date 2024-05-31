import { obtenerAutos , obtenerAuto } from './Operaciones/obtenerAutos.js';
import { crearTarjetas } from './Operaciones/creacionTarjeta.js';
import { buscarUnAuto } from "./Operaciones/buscarAuto.js";

obtenerAutos ()
.then ( autos => crearTarjetas(autos))
.catch (error => console.log(error));

let modelo = "";

const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click" , (e) => {
    modelo = document.getElementById("inputBuscar").value;
    e.preventDefault();
    
    obtenerAuto(modelo)
        .then((auto) => {            
            buscarUnAuto(auto);
        })
        .catch((error)=> {
            console.log(`El error es: ${error}`);
        })
});