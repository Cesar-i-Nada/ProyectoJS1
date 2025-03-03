import { getStudents, postStudents } from "../services/llamadosStudents.js";
const usuario = document.getElementById("username");
const password = document.getElementById("password")
const btnInicio = document.getElementById("btnInicio")

    btnInicio.addEventListener("click", async function(){
     const usuarios = await getStudents()
     

     const usuarioValido = usuarios.find((element) => element.usuario === usuario.value  && element.password === password.value);
     
     if (usuarioValido) {
        window.location.href = "../index.js"
     }else{
        console.log("USUARIO INVALIDO");
        document.getElementById("error").textContent = "Usted no puede ingresar";

     }
})

