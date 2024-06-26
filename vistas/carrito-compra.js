import { crearTarjetasCarritoCompra } from '../controladores/dibujaAutos.js';

function inicializacion() {
    const galeriaCarrito = localStorage.getItem("carrito-compra");
    crearTarjetasCarritoCompra(JSON.parse(galeriaCarrito));

    configurarEstadoSesion()
    configurarBotonCerrarSesion();
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