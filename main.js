let elementoPorID = document.getElementById('text1');
elementoPorID.innerHTML = 'Prueba de DOM';

obtener_localstorage();

function obtener_localstorage(){

    if( localStorage.getItem("nombre")){

    

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"))

    console.log(nombre);
    console.log(persona);

}else{
    console.log("No hay entradas en storage");
}

}

function guardar_localstorage(){

    let persona = {
        nombre: "Floky",
        edad: "21",
        correo: "floky@gmail",
        coords: {
            lat: 10,
            lng: -10
        }
    };


let nombre = "Juan";

localStorage.setItem( "nombre", nombre);
localStorage.setItem("persona", JSON.stringify(persona) )
};