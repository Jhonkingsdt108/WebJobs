const btnAbrirModal3 = document.querySelector('#btn-abrir-modal3');
const btnCerrarModal3 = document.querySelector('#btn-cerrar-modal3');
const modal3 = document.querySelector('#modal3');

btnAbrirModal3.addEventListener('click', ()=>{
    console.log('popupsenior');
    modal3.showModal();
    
});
btnCerrarModal3.addEventListener('click', ()=>{
    modal3.close();
})
