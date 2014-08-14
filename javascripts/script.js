//var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;

function maquina(){
    eleccionMaquina = Math.floor(Math.random() * 5);
}

function usuario(eleccionUsuario){
 eleccionUsuario = parseInt(eleccionUsuario);
maquina();

if(eleccionUsuario == 0){
    if(opciones[eleccionMaquina] == 1){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
    }
    if(opciones[eleccionMaquina] == 2){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
    }
    if(opciones[eleccionMaquina] == 0){
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
    }
}

if(eleccionUsuario == 1){
    if(opciones[eleccionMaquina] == 2){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
    }
    if(opciones[eleccionMaquina] == 0){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
        
    }
    if(opciones[eleccionMaquina] == 1){
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>';
        
    }
}

if(eleccionUsuario == 2) {
    if(opciones[eleccionMaquina] == 1){
        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
    
    }
    if(opciones[eleccionMaquina] == 0){
        document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
       
    }
    if(opciones[eleccionMaquina] == 2) {
        document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
    }
}

document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}
