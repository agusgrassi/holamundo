// const mensaje = "Hola"
// function saludar(mensaje){
//     console.log(mensaje)
// }
// saludar(mensaje);

// let pepe = 17;
// console.log(pepe > 18 ? "pasa" : pepe === 18 ?  "casi" : "no pasa");

// else if (precio === 0) {
//     console.log(`El producto ${producto} es sin cargo y el costo mínimo de envío es de $${300}. Por lo tanto, solo se pagará por el costo de envío: $${300}.`)
// }



function calculatePrice(producto, precio){
    const costosDeEnvios = [300, 500, 700];
    
    precio > 0 && precio <= 2000 && consologear(producto, precio, costosDeEnvios[0]);
    precio > 2001 && precio <= 4000 && consologear(producto, precio, costosDeEnvios[1]);
    precio > 4000 && consologear(producto, precio, costosDeEnvios[2]);

    function consologear(producto, precio, costoDeEnvio) {
        console.log(`El producto ${producto} cuesta $${precio}. Su costo de envío es de $${costoDeEnvio}. Por lo tanto, el precio final es de $${precio+costoDeEnvio}.`)
    }
}

calculatePrice("Macbook", 2500);
calculatePrice("Celular", 500);
calculatePrice("Playstation", 4500);
