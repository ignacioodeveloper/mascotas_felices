// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// js para iterar opciones
  // js para select comunas
  fetch('opciones.json')
  .then(response => response.json())
  .then(data => {
    const opciones = data.opciones;

    // Iterar sobre cada opción y crear un elemento option para cada una
    opciones.forEach(opcion => {
      const option = document.createElement('option');
      option.value = opcion.valor;
      option.textContent = opcion.texto;

      // Agregar la opción al elemento select
      const select = document.getElementById('opciones-select');
      select.appendChild(option);
    });
  });


    // Seleccionar el elemento <select>
    var opcionesSelect = document.getElementById("opciones-select");

    // Agregar un event listener para validar cuando cambie el valor seleccionado
    opcionesSelect.addEventListener("change", function() {
      if (opcionesSelect.value === "") {
        opcionesSelect.classList.add("is-invalid");
      } else {
        opcionesSelect.classList.remove("is-invalid");
      }
    });


// js para confirmar password
const passwordConfirm = document.querySelector('#exampleInputPassword1');
passwordConfirm.addEventListener('input', () => {
  const password = document.querySelector('#password').value;
  if (passwordConfirm.value !== password) {
    passwordConfirm.setCustomValidity('Las contraseñas no coinciden');
  } else {
    passwordConfirm.setCustomValidity('');
  }
});
