
const btnIniciar = document.querySelector("#btn-iniciar")
const icono = document.querySelector("#icono")
const login = document.querySelector("#login")
const alert = document.querySelector("#alert")

btnIniciar.addEventListener('click', ()=> {
    icono.classList.remove("vueltica")
    login.classList.remove("error")
    alert.classList.remove("alertA")
    void login.offsetWidth;
    icono.classList.add("vueltica")
    login.classList.add("error")
    alert.classList.add("alertA")
})