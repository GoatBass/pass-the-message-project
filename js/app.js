// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    console.log("Hemos hecho clic en el botón de submit!")

})