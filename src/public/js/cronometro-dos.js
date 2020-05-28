let temporizador_dos = document.getElementById('tiempo-dos');
let iniciar_dos = document.getElementById('iniciar-dos');
let tiempo_dos = 0, intervalo_dos = 0;
let verificar_dos = false;
init();
function init(){
  iniciar_dos.addEventListener('click', iniciarContadorDos);
}
function contarDos(){
  tiempo_dos += 0.01;
  temporizador_dos.innerHTML = tiempo_dos.toFixed(2);
  if(tiempo_dos>=14.00){
    verificar_dos = false;
    clearInterval(intervalo_dos);
    document.getElementById('formulario-dos').value = tiempo_dos;
  }
}
function iniciarContadorDos(){
  if(verificar_dos == false ){
    intervalo_dos = setInterval(contarDos, 10);
    verificar_dos = true;
  }else {
    verificar_dos = false;
    clearInterval(intervalo_dos);
  }

}
