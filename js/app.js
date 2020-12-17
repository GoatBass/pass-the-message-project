// Tu código aquí

const form = document.querySelector("#message-form");

form.addEventListener("submit", function (e) {
  console.log("Información sobre el objeto event: ", e);
  e.preventDefault(); // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada.

  //We select the input by his id message and add it in a variable
  let palabra = document.querySelector("#message");
  //We select the camp where the word will get printed and add it on a variable
  let campoPalabra = document.querySelector(".message-content");

  //And we just simply print into campPalabra, the value input by the user on the input field.
  campoPalabra.innerHTML = palabra.value;

  //And an extra touch, with this line we just clean the input field
  palabra.value = "";
  console.log("Hemos hecho clic en el botón de submit!");
});
