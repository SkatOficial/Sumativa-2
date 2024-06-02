export function agregarCarrito(auto){
    let carrito = localStorage.getItem("carrito-compra")

    carrito = carrito ? JSON.parse(carrito) : [];
    
    carrito.push(auto);
    
    console.log(carrito)
    
    localStorage.setItem("carrito-compra",JSON.stringify(carrito))
}