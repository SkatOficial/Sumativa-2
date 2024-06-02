import {agregarCarrito} from "./operacionBotones.js"

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
