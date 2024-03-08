// variables que se van a usar
let numInicio = 1;
let numFin = 5;
let numeroSecreto;
let intentos;
let listaNumeros = [];

// funcion para asignar texto
function asignarTextoElemento(etiqueta,texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
};

// funcion para con valores predeterminados para iniciar el juego
function presentacion(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Elige un número del ' + numInicio + ' al ' + numFin);
    numeroSecreto = generarNumero(numInicio,numFin);
    intentos = 1;

    console.log(listaNumeros);
};

// boton para comparar números
function comparadorNumero(){
    let numeroUsuario = parseInt(document.getElementById('numUs').value);

    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p','¡Felicidades acertaste! Nª intentos : '+intentos);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','¡Intenta de nuevo el número secreto es mayor!');

        } else {
            asignarTextoElemento('p','¡Intenta de nuevo el número secreto es menor!');         
        }
        intentos++
        limpiar();
    }
    return;
};

// generador de número aleatorio
function generarNumero(ini,fin) {
    let numeroGenerado = Math.floor(Math.random()*fin)+ini;
// comprobar si ya salieron todos los numeros posibles
    if (listaNumeros.length == numFin){
        asignarTextoElemento('p','Todos los números posibles ya fueron jugados.');
    } else {
    // comprobar si el numero ya se encuentra en la lista
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumero(numInicio,numFin);
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// limpiar la caja 
function limpiar() {
    document.querySelector('#numUs').value = '';
}

// boton para reiniciar juego
function reiniciar() {
    presentacion();
    limpiar();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
};

// llamada a la presentación
presentacion();


// [] 