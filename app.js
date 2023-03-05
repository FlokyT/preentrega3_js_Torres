alert("hola")

const productos = [
    {nombre: "Papa",
    precio: 50},

    {nombre: "Fideos",
    precio: 300},

    {nombre: "Arroz",
    precio: 250},

    {nombre: "Manaos",
    precio: 200},

    {nombre: "Ravioles",
    precio: 350},
];

let carrito = []

let seleccion = prompt("Hola desea comprar algun producto")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion =  prompt("Hola, desea comprar algo")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    console.log(productos)
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");

    alert(todosLosProductos.join(" - "))

}

else if (seleccion == "no"){
    alert("Hasta pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un product a tu carrito")
    let precio = 0 

    if(producto == "Papa" || producto == "Fideos" || producto == "Arroz" || producto == "Manaos" || producto == "Ravioles"){
        switch(producto) {
            case "Papa":
                precio = 50
                break;
            case "Fideos":
                precio = 300
                break;
            case "Arroz":
                precio = 250
                break;
            case "Manaos":
                precio = 200
                break;
            case "Ravioles":
                precio = 350
                break;
            default:
                break;
                            
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no tenemos eso pa")
    }

    seleccion = prompt("desea seguir comprando?")

    while(seleccion == "no") {
        alert("gracias, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })

        break;
    }

}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

console.log('el total a pagar por su compra es: ${total}' );

