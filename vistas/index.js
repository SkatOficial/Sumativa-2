import { obtenerAutos , obtenerAutosModelo } from '../controladores/obtenerAutos.js';
import { crearTarjetas } from '../controladores/creacionTarjetas.js';
import { validaAutos } from "../controladores/ValidaAutos.js";

function inicializacion() {
    obtenerAutos ()
    .then ( autos => crearTarjetas(autos))
    .catch (error => console.log(error));

    configurarBusqueda()
}

function configurarBusqueda() {//Configura el boton de Buscar
    const btnBuscar = document.getElementById("btnBuscar");

    btnBuscar.addEventListener("click", (e) => {
        e.preventDefault();
        manejarBusqueda();
    });
}

function manejarBusqueda() {//Maneja los posible errores que pudea tener la busqueda
    const modelo = document.getElementById("inputBuscar").value.trim();

    obtenerAutosModelo(modelo)
        .then(auto => validaAutos(auto))
        .catch(error => console.error(`Error al obtener autos por modelo: ${error}`));
}

inicializacion();