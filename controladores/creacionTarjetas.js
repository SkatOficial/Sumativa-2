<<<<<<< HEAD
import {agregarCarrito} from "./operacionBotones.js"
=======
// import { obtenerAutosModelo } from "./obtenerAutos";
>>>>>>> c7a50b47740a26f3bd2d10be6293383343e8b72d

export const crearTarjetas = async( results = [] ) => {
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