
var opciones = ["piedra", "papel", "tijera"];
var eleccionMaquina;

var contadorMaquina = 0;
var contadorUsuario = 0;
var contadorEmpate = 0;

function maquina(){
    eleccionMaquina = Math.floor(Math.random() * 5);
}

function usuario(eleccionUsuario){

maquina();

if(eleccionUsuario === 'piedra'){
    if(opciones[eleccionMaquina] === 'papel'){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
    }
    if(opciones[eleccionMaquina] === 'tijera'){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
    }
    if(opciones[eleccionMaquina] === 'piedra'){
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
    }
}

if(eleccionUsuario === 'papel'){
    if(opciones[eleccionMaquina] === 'tijera'){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
    }
    if(opciones[eleccionMaquina] === 'piedra'){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
        
    }
    if(opciones[eleccionMaquina] === 'papel'){
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>';
        
    }
}

if(eleccionUsuario === 'tijera') {
    if(opciones[eleccionMaquina] === 'papel'){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
    
    }
    if(opciones[eleccionMaquina] === 'piedra'){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
       
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
    }
}

document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}