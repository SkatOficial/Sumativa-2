// import { obtenerAutosModelo } from "./obtenerAutos";
import {agregarCarrito} from "./operacionBotones.js"
export const crearTarjetas = ( results = [] ) => {
    console.log("dentro de crearTarjetas",results);
    let galeria = document.getElementById('galeriaAutos');
    results.map((result) => {
        const { marca, modelo, año, transmision, motor, frenos, velocidades, image, precio } = result;

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

        const botonesTarjetas = document.createElement('div')
        botonesTarjetas.classList.add('contenedor-botones-carta')

        const btnVer = document.createElement('button');
        btnVer.classList.add('boton-verMas');
        btnVer.textContent = 'Ver Más';

        const btnAgregar = document.createElement("button");
        btnAgregar.classList.add('boton-agregar');
        btnAgregar.textContent = "+";
        btnAgregar.addEventListener("click",()=> {
            agregarCarrito(result);
        })


        infoCarta.appendChild(imagen);
        infoCarta.appendChild(txtModelo);
        infoCarta.appendChild(txtMarca);
        infoCarta.appendChild(intPrecio);

        botonesTarjetas.appendChild(btnVer);
        botonesTarjetas.appendChild(btnAgregar);

        
        carta.appendChild(imagen);
        carta.appendChild(infoCarta)
        carta.appendChild(botonesTarjetas)

        galeria.appendChild(carta);
    })
};

export const crearTarjetasCarritoCompra =( results = [] ) => {
    console.log("dentro de crearTarjetasCarritoCompra",results);

    let galeriaCarrito = document.getElementById('galeriaCarritoCompra');
    results.map((result) => {
        const { marca, modelo, año, transmision, motor, frenos, velocidades, image, precio } = result;

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

        const pBtnStockMenos = document.createElement('p');
        pBtnStockMenos.textContent = '−';

        const btnStockMas = document.createElement('button');
        btnStockMas.classList.add('btn-stock-flecha');

        const pBtnStockMas = document.createElement('p');
        pBtnStockMas.textContent = '+';

        const stockCantidad = document.createElement('p');
        stockCantidad.classList.add('stock-cantidad');
        stockCantidad.textContent = 1; // cambiar el 1 por stock real

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
// const enviarData = (id , name , race , ki , description , image , maxKi , gender) => {
//     const rutaArchivoHTML = '../personaje.html';
    
//     // Realiza una solicitud para obtener el contenido del archivo HTML
//     fetch(rutaArchivoHTML)
//         .then(response => response.text())
//         .then(html => {

//             // Una vez que hayas obtenido el contenido del archivo HTML, puedes manipularlo
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');

//         // Modifica el contenido del archivo HTML como desees
//         const imagePage = doc.getElementById('imagePage');
//         imagePage.src = image;

//         const namePage = doc.getElementById('name');
//         namePage.textContent = name;

//         const racePage = doc.getElementById('race');
//         racePage.textContent = `Raza : ${race}`;

//         const kiPage = doc.getElementById('ki');
//         kiPage.textContent = `Ki : ${ki}`;

//         const maxKiPage = doc.getElementById('maxKi');
//         maxKiPage.textContent = `Ki Máximo : ${maxKi}`;

//         const descPage = doc.getElementById('description');
//         descPage.textContent = description;

//      // Convierte el documento de nuevo a una cadena de texto HTML
//      const nuevoHTML = new XMLSerializer().serializeToString(doc);

//      // Finalmente, puedes usar el nuevo HTML como desees, por ejemplo, inyectándolo en tu página actual
//      document.body.innerHTML = nuevoHTML;
//    })
//    .catch(error => {
//      console.error('Error al cargar el archivo HTML:', error);
//    });
// }