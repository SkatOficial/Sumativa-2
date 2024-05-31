export const crearTarjeta = async( results = [] ) => {
    let galeria = document.getElementById('galeriaAutos');
    results.map((result) => {
        const { marca, modelo, año, transmision, motor, frenos, velocidades } = result;

        const carta = document.createElement('div');
        carta.classList.add("carta");
 

        const infoCarta = document.createElement('div');
        infoCarta.classList.add('info-carta');

        // const image = document.createElement('img');
        // image.src = imagen;
        // image.classList.add('card-img-top');

        const txtModelo = document.createElement('h2');
        txtModelo.textContent = modelo;

        const txtMarca = document.createElement('p');
        txtMarca.textContent = marca;

        const a = document.createElement('a');
        
        const btnVer = document.createElement('button');
        btnVer.classList.add('boton-carta');
        btnVer.textContent = 'Ver Más';

        infoCarta.appendChild(txtModelo);
        infoCarta.appendChild(txtMarca);
        infoCarta.appendChild(txtModelo);

        a.appendChild(btnVer)

        // card.appendChild(image);
        carta.appendChild(infoCarta)
        carta.appendChild(a)
        galeria.appendChild(carta);
    })
};