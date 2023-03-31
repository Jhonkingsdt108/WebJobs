const btnAbrirModal4 = document.querySelector('#btn-abrir-modal4');
const btnCerrarModal4 = document.querySelector('#btn-cerrar-modal4');
const modal4 = document.querySelector('#modal4');

btnAbrirModal4.addEventListener('click', ()=>{
    console.log('popupsenior');
    modal4.showModal();
    
});
btnCerrarModal4.addEventListener('click', ()=>{
    modal4.close();
})