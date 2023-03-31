const btnAbrirModal2 = document.querySelector('#btn-abrir-modal2');
const btnCerrarModal2 = document.querySelector('#btn-cerrar-modal2');
const modal2 = document.querySelector('#modal2');

btnAbrirModal2.addEventListener('click', ()=>{
    console.log('popupsenior');
    modal2.showModal();
    
});
btnCerrarModal2.addEventListener('click', ()=>{
    modal2.close();
})