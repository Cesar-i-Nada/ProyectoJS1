import { postStudents } from "../services/llamadosStudents.js";

const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const email = document.getElementById("email")
const register = document.getElementById("register")

register.addEventListener("click", function(){

    console.log(usuario.value,password.value,email.value);

    postStudents(usuario.value,password.value,email.value)

}) 

