import { obtenerAutos , obtenerAutosBusqueda} from '../controladores/obtenerAutos.js';
import { crearTarjetas } from '../controladores/creacionTarjetas.js';
import { validaAutos } from '../controladores/ValidaAutos.js';

function inicializacion() {
    obtenerAutos ()
    .then ( autos => crearTarjetas(autos))
    .catch (error => console.log(error));

    configurarBusqueda();
};

function configurarBusqueda() {//Configura el boton de Buscar
    const btnBuscar = document.getElementById("btnBuscar");

    btnBuscar.addEventListener("click", (e) => {
        e.preventDefault();
        manejarBusqueda();
    });
};

function manejarBusqueda() {//Maneja las acciones al apretar el boton Buscar
    const valorBuscado = document.getElementById("inputBuscar").value.trim();
    
    obtenerAutosBusqueda(valorBuscado)
        .then(autos =>validaAutos(autos)
        )
        .catch(error => console.error(`Error al buscar autos: ${error}`));
};

inicializacion();