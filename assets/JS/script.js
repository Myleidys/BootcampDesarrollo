//es necesario ejecutar la variable dentro de la funcion para que no se ejecute de prioero
//se puede inicializar la variable fuera de la funcion o la puede definir dentro de la funcion

//no hay necesidad de color el tipo de variable, solo se inicializa
var divnombre = document.getElementById(`mensajenombre`);
var divedad = document.getElementById(`mensajeedad`);
var divciudad = document.getElementById(`mensajeciudad`);
var divgenero = document.getElementById(`mensajegenero`);

function mostrarMensaje() {
    var nombre = prompt("ingresa tu nombre")
    divnombre.innerText = nombre
    var edad = prompt("ingresa tu edad")
    divedad.innerText = edad
    var ciudad = prompt("ingresa tu ciudad")
    divciudad.innerText = ciudad
    var genero = prompt("ingresa tu genero")
    divgenero.innerText = genero

    //var mensajenombre = `` + nombre + ``
    //var mensajeedad = `` + edad + ``
    /*
        divnombre.innerText = nombre
        divedad.innerText = edad
        divciudad.innerText = ciudad
        divgenero.innerText = genero
    */
}