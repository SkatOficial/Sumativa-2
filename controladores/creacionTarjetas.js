// import { obtenerAutosModelo } from "./obtenerAutos";

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
        intPrecio.textContent = precio;

        const btnVer = document.createElement('button');
        btnVer.classList.add('boton-carta');
        btnVer.textContent = 'Ver Más';

        infoCarta.appendChild(imagen);
        infoCarta.appendChild(txtModelo);
        infoCarta.appendChild(txtMarca);
        infoCarta.appendChild(intPrecio);

        galeria.appendChild(carta);
        carta.appendChild(imagen);
        carta.appendChild(infoCarta)
        carta.appendChild(btnVer)
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