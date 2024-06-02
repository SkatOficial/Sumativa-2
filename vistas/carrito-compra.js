import { obtenerAutos , obtenerAutosBusqueda} from '../controladores/obtenerAutos.js';
import { crearTarjetasCarritoCompra } from '../controladores/dibujaAutos.js';
import { validaAutos } from "../controladores/ValidaAutos.js";

function inicializacion() {
    const galeriaCarrito = localStorage.getItem("carrito-compra");
    crearTarjetasCarritoCompra(JSON.parse(galeriaCarrito));
}


inicializacion();