
const btnIniciar = document.querySelector("#btn-iniciar")
const icono = document.querySelector("#icono")

btnIniciar.addEventListener('click', ()=> {
    icono.classList.add("vueltica")

    setTimeout(function(){
        icono.classList.remove("vueltica")
    }, 1600);
})