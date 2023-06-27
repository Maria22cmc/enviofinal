let nombreUsuario =document.getElementById("nombre");
let correoUsuario= document.getElementById("correo");
let telefonoUsuario= document.getElementById("telefono");
let botonEnvio = document.getElementById("botonFormulario");

//vamos a escuchar el clic en el  boton

botonEnvio.addEventListener("click",function(evento){
    evento.preventDefault()
   let nombre=nombreUsuario.value 
   let correo=correoUsuario.value
   let telefono=telefonoUsuario.value
   let errores=[]


   if(!nombre){
    errores.push("Error en el nombre ")
    nombreUsuario.classList.add("is-invlid")
   }
   if(!correo){
    errores.push("Error en el correo")
    correoUsuario.classList.add("is-invlid")
   }
   if (!telefono) {
    errores.push("Error en el telefono")
    telefonoUsuario.classList.add("is-invlid")
   }
   //console.log(errores)
   if(errores.length>0){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })

   }else{
     Swal.fire(
       'Exito en la reserva!',
        'You clicked the button!',
        'success'
      )
      //preguntando si tengo datos en memoria 
      let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
      let reservas
      if(datosMemoria==null){
       reservas=[]
      }else{
        reservas=datosMemoria
      }

     
      let reserva={
        nombre,
        correo,
        telefono

      }
      reservas.push(reserva)
      localStorage.setItem("datosMemoria",JSON.stringify(reservas))
   }
 
})