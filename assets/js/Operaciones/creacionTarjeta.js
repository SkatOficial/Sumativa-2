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

export const crearUnaTarjeta = async (result) => {
    let galeria = document.getElementById('galeriaAutos');
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
};

