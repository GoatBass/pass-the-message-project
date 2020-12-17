// Tu código aquí

const form = document.querySelector("#message-form");
let errorAlert = document.querySelector("#error");

form.addEventListener("submit", function (e) {
  console.log("Información sobre el objeto event: ", e);
  e.preventDefault(); // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada.

  //We select the input by his id message and add it in a variable
  let palabra = document.querySelector("#message");
  //We select the camp where the word will get printed and add it on a variable
  let campoPalabra = document.querySelector(".message-content");

  //First we check if the value is empty or not, and if it's empty we make the error message appear and get printed.
  if (!palabra.value) {
    errorAlert.style.display = "block";
    errorAlert.innerHTML = "Error! You didn't type any word!";
  }
  // But if it has some value, just prints the value on the camp we selected earlier
  else {
    campoPalabra.innerHTML = palabra.value;
  }

  //And an extra touch, with this line we just clean the input field
  palabra.value = "";
  // console.log("Hemos hecho clic en el botón de submit!");
});
