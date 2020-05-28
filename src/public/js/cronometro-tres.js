let temporizador_tres = document.getElementById('tiempo-tres');
let iniciar_tres = document.getElementById('iniciar-tres');
let tiempo_tres = 0, intervalo_tres = 0;
let verificar_tres = false;
init();

function init(){
  iniciar_tres.addEventListener('click', iniciarContadorTres);
}
function contarTres(){
  tiempo_tres += 0.01;
  temporizador_tres.innerHTML = tiempo_tres.toFixed(2);
  if(tiempo_tres>=22.00){
    verificar_tres = false;
    clearInterval(intervalo_tres);
    document.getElementById('formulario-tres').value = tiempo_tres;
  }
}
function iniciarContadorTres(){
  if(verificar_tres == false ){
    intervalo_tres = setInterval(contarTres, 10);
    verificar_tres = true;
  }else {
    verificar_tres = false;
    clearInterval(intervalo_tres);
  }
}
