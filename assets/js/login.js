/* Registro */
let nombreV = "";
let correoV = "";
let claveV = "";

let nombreR = document.getElementById("nombreR");
let correoR = document.getElementById("emailR");
let claveR = document.getElementById("claveR");

let btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar .addEventListener("click", (e) => {
    e.preventDefault();
    nombreV = nombreR.value;
    correoV = correoR.value;
    claveV = claveR.value;

    if(nombreV === ""){
        alert("Falta Nombre")
        return;
    };

    if(correoV === ""){
        alert("Falta Correo")
        return;
    };

    if(claveV === ""){
        alert("Falta Contraseña")
        return;
    };

    console.log("Nombre "+nombreV);
    console.log("Correo "+correoV);
    console.log("Clave "+claveV);
});

/* Ingreso */
let correoI = document.getElementById("emailI");
let claveI = document.getElementById("claveI");

let btnIngresar = document.getElementById("btnIngresar");

btnIngresar .addEventListener("click", (e) => {
    e.preventDefault();
    correoV = correoI.value;
    claveV = claveI.value;

    if(correoV === ""){
        alert("Falta Correo")
        return;
    };

    if(claveV === ""){
        alert("Falta Contraseña")
        return;
    };

    console.log("Correo "+correoV);
    console.log("Clave "+claveV);
});