console.log('Hola mundo');

const obtenerAutos = async() => {
    try {
        
        const response = await fetch('https://autos-rdbd.onrender.com');
        const data =  await response.json();

        return data.results
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

const crearTarjeta = async( results = [] ) => {
    let autosRow = document.getElementById('autosRow');
    results.map((result) => {
        
        const { marca, modelo, año, transmision, motor, frenos, velocidades } = result;

        const divRow = document.createElement('div');
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-3");
        divRow.classList.add("col-xs-3");
        divRow.classList.add("mt-3");
        divRow.classList.add("mb-3");

        const card = document.createElement('div');
        card.classList.add('card');

        // const image = document.createElement('img');
        // image.src = imagen;
        // image.classList.add('card-img-top');
    
        const divBody = document.createElement('div');
        divBody.classList.add('card-body');

        const modelox = document.createElement('h5');
        modelox.classList.add('card-tittle');
        modelox.textContent = modelo;

        const marcax = document.createElement('p');
        marcax.classList.add('card-text');
        marcax.textContent = marca;

        const btnVer = document.createElement('button');
        btnVer.classList.add('btn');
        btnVer.classList.add('btn-warning');
        btnVer.textContent = 'Ver Más';

        divRow.appendChild(card);

        // card.appendChild(image);
        card.appendChild(divBody)

        divBody.appendChild(modelox);
        divBody.appendChild(marcax);
        divBody.appendChild(btnVer);

        autosRow.appendChild(divRow);
    })
};

obtenerAutos ()
    .then ( (data) => {
        crearTarjeta(data);
    })
    .catch (error => console.log(error));
