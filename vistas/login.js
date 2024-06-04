import { registro } from '../controladores/obtenerUsuarios.js';

console.log("Hola mundo");

/* Registro */ 
let usser = "";
let pass = "";
let name = "";

let vUsser = document.getElementById('emailR');
let vPass = document.getElementById('claveR');
let vName = document.getElementById('nombreR');

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    usser = vUsser.value;
    name = vName.value;
    pass = vPass.value;

    if(name === ""){
        alert("Falta Nombre")
        return;
    };

    if(usser === ""){
        alert("Falta Correo")
        return;
    };

    if(pass === ""){
        alert("Falta Contraseña")
        return;
    };

    registro(usser, name, pass); // Llamar a la función login definida en login.js
});


/* Ingreso */ 
let bUsser = document.getElementById("emailI");
let bPass = document.getElementById("claveI");

let btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    usser = bUsser.value;
    pass = bPass.value;

    if(usser === ""){
        alert("Falta Correo")
        return;
    };

    if(pass === ""){
        alert("Falta Contraseña")
        return;
    };
    registro(usser,pass); // Llamar a la función login definida en login.js
    window.location.href = './index.html';
});

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

configurarEstadoSesion()
configurarBotonCerrarSesion();
