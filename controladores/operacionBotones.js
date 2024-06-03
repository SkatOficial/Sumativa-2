import { crearTarjetas, crearTarjetasCarritoCompra} from './dibujaAutos.js';


//REFERENTE A CARRITO DE COMPRA
export function agregarAuto(auto){
    if(localStorage.getItem("carrito-compra") === null){// si el carrito no esta creado o vacio
        localStorage.setItem("carrito-compra",JSON.stringify([]))
    }

    //AGREGA AUTO A CARRITO
    try {
        let galeriaAuto = JSON.parse(localStorage.getItem("galeria-autos"));
        let carrito = JSON.parse(localStorage.getItem("carrito-compra"));
        galeriaAuto[obtieneAuto(galeriaAuto,auto)]

        //manejo de exepciones
        if(galeriaAuto[obtieneAuto(galeriaAuto,auto)].stock <= 0){//si el auto no le queda Stock
            console.log("SIN STOCK");
            return
        }

        if(carrito.length === 0){//pregunta si esta vacio
            carrito = [];
        }

        if((obtieneAuto(carrito,auto) === -1)){ //pregunta su el AUTO se encuentra en CARRITO
            console.log("Dentro de if 2")
            auto.stock = 1;
            carrito.push(auto);

            //se actualiza galeria autos
            let indice = obtieneAuto(galeriaAuto,auto);
            galeriaAuto[indice].stock -= 1;

            localStorage.setItem("carrito-compra",JSON.stringify(carrito));
            localStorage.setItem("galeria-autos",JSON.stringify(galeriaAuto));
        }
        else{
            console.log("Dentro de else 2")
            let indice = obtieneAuto(carrito,auto);
            carrito[indice].stock += 1;

            indice = obtieneAuto(galeriaAuto,auto);
            galeriaAuto[indice].stock -= 1;

            localStorage.setItem("carrito-compra",JSON.stringify(carrito));
            localStorage.setItem("galeria-autos",JSON.stringify(galeriaAuto));
        }
        
        crearTarjetasCarritoCompra(carrito);//actualiza el carrito de compras
        crearTarjetas(galeriaAuto);//actualiza la galeria de autos
        
    } catch (error) {
        console.error("Error al parsear el carrito:", error);
    }
};
export function eliminarAuto(auto){
    if(localStorage.getItem("carrito-compra") === null){// si el carrito no esta creado o vacio
        localStorage.setItem("carrito-compra",JSON.stringify([]))
    }

    //ELIMINA AUTO A CARRITO
    try {
        let galeriaAuto = JSON.parse(localStorage.getItem("galeria-autos"));
        let carrito = JSON.parse(localStorage.getItem("carrito-compra"));
        galeriaAuto[obtieneAuto(galeriaAuto,auto)]

        //manejo de exepciones
        if(carrito[obtieneAuto(carrito,auto)].stock <= 0){//si el auto no le queda Stock
            console.log("NO HAY MAS");
            return
        }

        if(carrito.length === 0){//pregunta si esta vacio
            carrito = [];
        }

        console.log("Dentro de else 2")
        let indice = obtieneAuto(carrito,auto);
        carrito[indice].stock -= 1;

        indice = obtieneAuto(galeriaAuto,auto);
        galeriaAuto[indice].stock += 1;

        localStorage.setItem("carrito-compra",JSON.stringify(carrito));
        localStorage.setItem("galeria-autos",JSON.stringify(galeriaAuto));
        
        
        crearTarjetasCarritoCompra(carrito);//actualiza el carrito de compras
        crearTarjetas(galeriaAuto);//actualiza la galeria de autos
        
    } catch (error) {
        console.error("Error al parsear el carrito:", error);
    }
}
function obtieneAuto(arreglo, auto){
    //busca el indice de AUTO en GALERIA
    let indice = arreglo.findIndex(a => a.modelo === auto.modelo && a.marca === auto.marca);
    return indice;
};

