$(document).ready(function(){




  // funcion carrusel
  $('.slick-carousel').slick({
    // opciones de configuración de Slick
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]
  });

  // nombrando la clase que usara slick
  $('.single-item').slick();


  // header and footer se cargaran automaticamente al inciar la pag
    // header
  $("#navbar").load("navbar.html",function(response, status, xhr) {
    if (status === "error") {
      console.error("Error al cargar header: " + xhr.status + " " + xhr.statusText);
    }
  });

  // and footer
  $("#footer").load("footer.html",function(response, status, xhr){
    if (status === "error") {
      console.error("Error al cargar footer: " + xhr.status + " " + xhr.statusText);
    }
  });


  // Agregar método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");
  
    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }
  
    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }
  
    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
  
    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 

  $("#rut, #email, #password, #password2").on("keyup blur", function() {
    if ($(this).valid()) {
      $(this).removeClass("alert alert-danger").addClass("alert alert-success");
    } else {
      $(this).removeClass("alert alert-success");
    }
  });
  
  $("#formulario1").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },

    }, // --> Fin de reglas

    messages: {
      rut: {
        required: "El rut es un campo obligatorio",
        rutChileno: "El formato del rut no es válido"
      },



      email: {
        required: "El email es un campo requerido",
        email: "El email no cumple el formato de un correo",
      },
      password: {
        required: "La contraseña es una campo obligatorio",
        minlength: "Mínimo 5 caracteres",
      },
      password2: {
        required: "Repita la contraseña anterior",
        equalTo: "Debe ser igual al campo contraseña",
      },

    },
    errorElement: "div",
    errorClass: "alert alert-danger",
    errorPlacement: function(error, element) {
      error.appendTo(element.closest(".mb-3"));
    },



  });



});



// script titulo typing efect
document.addEventListener('DOMContentLoaded',function(event){

function generarCodigoAleatorio() {
  var codigo = Math.floor(Math.random() * 10000) + 1;
  return codigo;
}

const copyEmailBtn = document.querySelector('#copy-email');

copyEmailBtn.addEventListener('click', () => {
const email = generarCodigoAleatorio();

// Copiar el email al portapapeles
navigator.clipboard.writeText(email)
  .then(() => {
    // Cambiar el texto del botón
    copyEmailBtn.innerText = 'Codigo de Descuento Copiado!';
  })
  .catch(err => {
    console.error('No se pudo copiar el Codigo de Descuento: ', err);
  });
});




});
