import { obtenerAutos , obtenerAutosBusqueda} from '../controladores/obtenerAutos.js';
import { crearTarjetas } from '../controladores/dibujaAutos.js';
import { validaAutos } from '../controladores/ValidaAutos.js';

function inicializacion() {
    configurarCarritoCompra();
    configurarEstadoSesion();
    configurarBotonCerrarSesion();
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