const btnAbrirModal1 = document.querySelector('#btn-abrir-modal1');
const btnCerrarModal1 = document.querySelector('#btn-cerrar-modal1');
const modal1 = document.querySelector('#modal1');

btnAbrirModal1.addEventListener('click', ()=>{
    console.log('popupsenior');
    modal1.showModal();
    
});
btnCerrarModal1.addEventListener('click', ()=>{
    modal1.close();
})