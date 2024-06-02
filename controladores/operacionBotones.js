//REFERENTE A CARRITO DE COMPRA
export function agregarCarrito(auto){
    let carrito = localStorage.getItem("carrito-compra")

    carrito = carrito ? JSON.parse(carrito) : [];
    
    carrito.push(auto);
    
    localStorage.setItem("carrito-compra",JSON.stringify(carrito))
}

