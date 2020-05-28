let temporizador = document.getElementById('tiempo');
let iniciar = document.getElementById('iniciar');

let tiempo = 0, intervalo = 0;
let tiempoP;
let verificar = false;
init();

function init(){
  iniciar.addEventListener('click', iniciarContador);
}
function contar(){
  tiempo += 0.01;
  temporizador.innerHTML = tiempo.toFixed(2);
  if(tiempo>=30.00){
    verificar = false;
    clearInterval(intervalo);
    document.getElementById('formulario').value = tiempo;
  }
}
function iniciarContador(){
  if(verificar == false ){
    intervalo = setInterval(contar, 10);
    verificar = true;
  }else {
    verificar = false;
    clearInterval(intervalo);
  }
}
