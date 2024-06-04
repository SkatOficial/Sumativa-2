import { obtenerAutos , obtenerAutosBusqueda} from '../controladores/obtenerAutos.js';
import { crearTarjetas } from '../controladores/dibujaAutos.js';
import { validaAutos } from '../controladores/ValidaAutos.js';

function inicializacion() {

    if(localStorage.getItem("galeria-autos") === null || localStorage.getItem("galeria-autos").length === 0){// si el carrito no esta creado o vacio
        obtenerAutos()
        .then (autos => localStorage.setItem("galeria-autos",JSON.stringify(autos)))
        .catch (error => console.log(error));

        obtenerAutos()
        .then (autos => crearTarjetas(autos))
        .catch (error => console.log(error));
    }else{
        let galeriaAutos = localStorage.getItem("galeria-autos");
        galeriaAutos = JSON.parse(galeriaAutos)
    
        crearTarjetas(galeriaAutos);
    }
    
    configurarBusqueda();
    configurarCarritoCompra();
    configurarEstadoSesion();
    configurarBotonCerrarSesion();
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
        .then(autos =>validaAutos(autos))
        .catch(error => console.error(`Error al buscar autos: ${error}`))
};

function configurarCarritoCompra() {
    const btnCarrito = document.getElementById("btnCarritoCompra");

    btnCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        manejarCarritoCompra();
    });
}
function manejarCarritoCompra(){
    window.location.href = 'carrito-compra.html'
}

function configurarEstadoSesion(){
    const listaSesion = document.getElementById("lista-opciones-sesion");
    const btnCerrarSession = document.getElementById("btnCerrarSession");

    const sesionAbierta = JSON.parse(localStorage.getItem("sesionAbierta"));
    console.log(sesionAbierta)

    if(sesionAbierta){    
        listaSesion.style.display = 'none';
        btnCerrarSession.style.display = 'block';
    }else{

        listaSesion.style.display = 'block';
        btnCerrarSession.style.display = 'none';

    }
}

function configurarBotonCerrarSesion() {
    const btnCerrarSession = document.getElementById("btnCerrarSession");

    btnCerrarSession.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("sesionAbierta",JSON.stringify(false));
        configurarEstadoSesion();
    });
}

inicializacion();