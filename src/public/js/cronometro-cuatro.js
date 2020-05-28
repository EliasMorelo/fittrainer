let temporizador_cuatro = document.getElementById('tiempo-cuatro');
let iniciar_cuatro = document.getElementById('iniciar-cuatro');
let tiempo_cuatro = 0, intervalo_cuatro = 0;
let verificar_cuatro = false;
init();

function init(){
  iniciar_cuatro.addEventListener('click', iniciarContadorCuatro);
}
function contarCuatro(){
  tiempo_cuatro += 0.01;
  temporizador_cuatro.innerHTML = tiempo_cuatro.toFixed(2);
  if(tiempo_cuatro>=28.00){
    verificar_cuatro = false;
    clearInterval(intervalo_cuatro);
    document.getElementById('formulario-cuatro').value = tiempo_cuatro;
  }
}
function iniciarContadorCuatro(){
  if(verificar_cuatro == false ){
    intervalo_cuatro = setInterval(contarCuatro, 10);
    verificar_cuatro = true;
  }else {
    verificar_cuatro = false;
    clearInterval(intervalo_cuatro);
  }
}
