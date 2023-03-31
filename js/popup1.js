const btnAbrirModa = document.querySelector('#btn-abrir-moda');
const btnCerrarModa = document.querySelector('#btn-cerrar-moda');
const moda = document.querySelector('#moda');

btnAbrirModa.addEventListener('click', ()=>{
    console.log("popup1")
    moda.showModal();
});
btnCerrarModa.addEventListener('click', ()=>{
    moda.close();
})