const email = document.querySelector(".email")
const incorrecto = document.querySelector(".incorrecto")
const boton = document.querySelector(".boton")
const error = document.querySelector(".error")


let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let correcto = ""
const validacion = () =>{
    console.log(email.value)
    if (emailRegex.test(email.value)) {
        console.log("bien")
}else{
    incorrecto.style.display = "block"
    email.style.border ="0.1vw solid hsl(354, 100%, 66%)"
}}