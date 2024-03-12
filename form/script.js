const $form = document.getElementById("form");
const $name = document.getElementById("nombre");
const $parrafo = document.querySelector(".alertas");

function validarForm() {
  let warnings = "";
  let isValid = true;
  $parrafo.innerHTML = "";

  if ($name.value.length < 4) {
    warnings += "El nombre debe contener más de 4 caracteres";
    isValid = false;
  }
  if (!isValid) {
    $parrafo.innerHTML = warnings;
  } else {
    $parrafo.innerHTML = "Enviado";
  }

  return isValid;
}

$form.addEventListener("submit", (e) => {
  if (validarForm()) {
    $form.submit();
  } else {
    e.preventDefault();
  }
});
