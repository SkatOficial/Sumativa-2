
import {agregarAuto, eliminarAuto} from "./operacionBotones.js"

const rutaDocumento = '../vistas/ficha1.html';

export const crearTarjetas = async ( results = [] ) => {

    let galeria = document.getElementById('galeriaAutos');
    if(galeria === null){
        return
    }
    galeria.innerHTML = '';
    results.map((result) => {
        const { marca, modelo, año, transmision, motor, frenos, velocidades, image, precio, stock} = result;

        const carta = document.createElement('div');
        carta.classList.add("carta");
 
        const infoCarta = document.createElement('div');
        infoCarta.classList.add('info-carta');

        const imagen = document.createElement('img');
        imagen.src = image;
        imagen.classList.add('card-img-top');

        const txtModelo = document.createElement('h2');
        txtModelo.textContent = modelo;

        const txtMarca = document.createElement('p');
        txtMarca.textContent = marca;

        const intPrecio = document.createElement('p');
        intPrecio.textContent = "$"+precio;

        const intStock = document.createElement('p');
        intStock.textContent = "Stock: "+stock;


        const botonesTarjetas = document.createElement('div')
        botonesTarjetas.classList.add('contenedor-botones-carta')

        const btnVer = document.createElement('button');
        btnVer.classList.add("boton-verMas");
        btnVer.textContent = 'Ver detalles';
        btnVer.addEventListener("click", () => crearTarjetaUnica (marca, modelo, año, transmision, motor, frenos, velocidades, image, precio));


        const btnAgregar = document.createElement("button");
        btnAgregar.classList.add('boton-agregar');
        btnAgregar.textContent = "+";
        btnAgregar.addEventListener("click",()=> {
            agregarAuto(result);
        })


        infoCarta.appendChild(imagen);
        infoCarta.appendChild(txtModelo);
        infoCarta.appendChild(txtMarca);
        infoCarta.appendChild(intPrecio);
        infoCarta.appendChild(intStock);

        botonesTarjetas.appendChild(btnVer);
        botonesTarjetas.appendChild(btnAgregar);

        
        carta.appendChild(imagen);
        carta.appendChild(infoCarta)
        carta.appendChild(botonesTarjetas)

        galeria.appendChild(carta);
    })
};

export const crearTarjetasCarritoCompra =( results = [] ) => {
    let galeriaCarrito = document.getElementById('galeriaCarritoCompra');
    if(galeriaCarrito === null){
        return
    }
    galeriaCarrito.innerHTML = '';
    results.map((result) => {
        const { marca, modelo, año, transmision, motor, frenos, velocidades, image, precio, stock } = result;

        const elementoCarrito = document.createElement('div');
        elementoCarrito.classList.add("elemento-carrito-compra","py-3");
        
 
        const imagenElemento = document.createElement('img');
        imagenElemento.src = image;
        imagenElemento.classList.add('imagen-carrito-compra');

        const infoElementoCarrito = document.createElement('div');
        infoElementoCarrito.classList.add('info-elemento-carrito');

        const divInfoElementoCarrito= document.createElement('div');

        const txtModelo = document.createElement('h2');
        txtModelo.textContent = modelo;

        const txtMarca = document.createElement('p');
        txtMarca.classList.add("espesificaciones")
        txtMarca.textContent = marca;

        const intPrecio = document.createElement('h2');
        intPrecio.textContent = "$"+precio;

        const botonesElementoCarrito = document.createElement('div')
        botonesElementoCarrito.classList.add('controlador-stock')

        const btnStockMenos = document.createElement('button');
        btnStockMenos.classList.add('btn-stock-flecha');
        btnStockMenos.addEventListener("click",()=> {
            eliminarAuto(result);
        })

        const pBtnStockMenos = document.createElement('p');
        pBtnStockMenos.textContent = '−';

        const btnStockMas = document.createElement('button');
        btnStockMas.classList.add('btn-stock-flecha');

        const pBtnStockMas = document.createElement('p');
        pBtnStockMas.textContent = '+';
        pBtnStockMas.addEventListener("click",()=> {
            agregarAuto(result);
        })

        const stockCantidad = document.createElement('p');
        stockCantidad.classList.add('stock-cantidad');
        stockCantidad.textContent = stock;
        

        divInfoElementoCarrito.appendChild(txtModelo);
        divInfoElementoCarrito.appendChild(txtMarca);
        divInfoElementoCarrito.appendChild(intPrecio);

        btnStockMenos.appendChild(pBtnStockMenos);
        btnStockMas.appendChild(pBtnStockMas);

        botonesElementoCarrito.appendChild(btnStockMenos);
        botonesElementoCarrito.appendChild(stockCantidad);
        botonesElementoCarrito.appendChild(btnStockMas);

        infoElementoCarrito.appendChild(divInfoElementoCarrito);
        infoElementoCarrito.appendChild(botonesElementoCarrito);
        
        elementoCarrito.appendChild(imagenElemento);
        elementoCarrito.appendChild(infoElementoCarrito);

        galeriaCarrito.appendChild(elementoCarrito);
    })
};
const crearTarjetaUnica = (marca, modelo, año, transmision, motor, frenos, velocidades, image, precio) => {

    fetch(rutaDocumento)
        .then(response => response.text())
        .then(html => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

        const imagen = doc.getElementById('imagen');
        imagen.src = image;

        const txtModelo = doc.getElementById('Modelo');
        txtModelo.textContent = modelo;

        const txtMarca = doc.getElementById('Marca');
        txtMarca.textContent = `Marca : ${marca}`;

        const txtAño = doc.getElementById('Año');
        txtAño.textContent = `Año : ${año}`;

        const txtMotor = doc.getElementById('Motor');
        txtMotor.textContent = `Motor : ${motor}`;

        const txtTransmision = doc.getElementById('Transmision');
        txtTransmision.textContent = `Transmision: ${transmision}`;

        const txtVelocidades = doc.getElementById('Velocidades');
        txtVelocidades.textContent = `Velocidades : ${velocidades}`;

        const txtFrenos = doc.getElementById('Frenos');
        txtFrenos.textContent = `Frenos : ${frenos}`;

        const txtPrecio = doc.getElementById('Precio');
        txtPrecio.textContent = `Precio : ${precio}`;

     // Convierte el documento de nuevo a una cadena de texto HTML
     const nuevoHTML = new XMLSerializer().serializeToString(doc);

     // Finalmente, puedes usar el nuevo HTML como desees, por ejemplo, inyectándolo en tu página actual
     document.body.innerHTML = nuevoHTML;
   })
   .catch(error => {
     console.error('Error al cargar el archivo HTML:', error);
   });
}