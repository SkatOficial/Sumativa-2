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
    const btnCarrito = document.getElementById("btnCarritoCompra");
    const sesionAbierta = localStorage.getItem("sesionAbierta");

    if(sesionAbierta){    
        btnCarrito.style.display = 'block';
    }else{
        btnCarrito.style.display = 'block';
    }
}
inicializacion();