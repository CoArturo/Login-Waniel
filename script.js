
const btnIniciar = document.querySelector("#btn-iniciar")
const icono = document.querySelector("#icono")
const login = document.querySelector("#login")
const alert = document.querySelector("#alert")

btnIniciar.addEventListener('click', ()=> {
    login.classList.remove("error")
    alert.classList.remove("alertA")
    void login.offsetWidth;
    login.classList.add("error")
    alert.classList.add("alertA")
})