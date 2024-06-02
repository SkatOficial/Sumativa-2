import { registro } from '../controladores/getUsser.js';

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


// /* Registro */ 
// let nombreV = "";
// let correoV = "";
// let claveV = "";

// let nombreR = document.getElementById("nombreR");
// let correoR = document.getElementById("emailR");
// let claveR = document.getElementById("claveR");

// let btnRegistrar = document.getElementById("btnRegistrar");

// btnRegistrar.addEventListener("click", (e) => {
//     e.preventDefault();
//     nombreV = nombreR.value;
//     correoV = correoR.value;
//     claveV = claveR.value;

//     if(nombreV === ""){
//         alert("Falta Nombre")
//         return;
//     };

//     if(correoV === ""){
//         alert("Falta Correo")
//         return;
//     };

//     if(claveV === ""){
//         alert("Falta Contraseña")
//         return;
//     };

//     console.log("Nombre "+nombreV);
//     console.log("Correo "+correoV);
//     console.log("Clave "+claveV);
// });








// /* Ingreso */
// let correoI = document.getElementById("emailI");
// let claveI = document.getElementById("claveI");

// let btnIngresar = document.getElementById("btnIngresar");

// btnIngresar.addEventListener("click", (e) => {
//     e.preventDefault();
//     correoV = correoI.value;
//     claveV = claveI.value;

//     if(correoV === ""){
//         alert("Falta Correo")
//         return;
//     };

//     if(claveV === ""){
//         alert("Falta Contraseña")
//         return;
//     };

//     console.log("Correo "+correoV);
//     console.log("Clave "+claveV);
// });

