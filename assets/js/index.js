import { obtenerAutos , obtenerAutosModelo } from './Operaciones/obtenerAutos.js';
import { crearTarjetas } from './Operaciones/creacionTarjeta.js';
import { buscarAutos } from "./Operaciones/buscarAuto.js";

obtenerAutos ()
.then ( autos => crearTarjetas(autos))
.catch (error => console.log(error));

let modelo = "";

const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click" , (e) => {
    modelo = document.getElementById("inputBuscar").value;
    e.preventDefault();
    
    obtenerAutosModelo(modelo)
        .then((auto) => {            
            buscarAutos(auto);
        })
        .catch((error)=> {
            console.log(`El error es: ${error}`);
        })
});