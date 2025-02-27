function blases() {
    return true
}

export{blases} 

const snacks = ["🍎","🍕","🍫", "🍔", "🧁"]

setInterval(()=>{
  let listaSnacks = snacks.pop()
  if(snacks.length > 0){
  console.log(snacks)
  }
},1000)






Swal.fire({
    title: "¡Estás dentro!",
    text: "Tu registro ha sido exitoso",
    icon: "success"
  });