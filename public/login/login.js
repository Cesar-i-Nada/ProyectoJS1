import { getStudents, postStudents } from "../services/llamadosStudents.js";
const usuario = document.getElementById("usuario");
const password = document.getElementById("password")
const btnInicio = document.getElementById("btnInicio")

    btnInicio.addEventListener("click", async function(){
     const usuarios = await getStudents()
     
     usuarios = [usuario, password];

     const getStudents = Students.find((element) => element <5 );
     
     console.log(usuarios);
})

