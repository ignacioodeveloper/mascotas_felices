$(document).ready(function(){

  $('#btn-obtener-ropas').click(function() {
    
    // funcion obtener datos api fakestore
    $.get('https://fakestoreapi.com/products',
    
    function(datos) 
    {   
        $('#tabla-ropas tbody').empty();
        $.each(datos, function(i, item) {
            
            var fila = '';
            fila += '<tr>' ;
            fila += '<td>' + item.title + '</td>';
            fila += '<td>' + item.description + '</td>';
            fila += '<td>' + item.price + '</td>';
            fila += '<td><img src="'+ item.image +'"></td>';

            fila += '</tr>';

            $('#tabla-ropas').append(fila);
        });
    });
  });

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

  $('.single-item').slick();

});

document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");

  function loadHTMLContent(url, container) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          container.innerHTML = xhr.responseText;
        } else {
          console.error("Error al cargar el archivo HTML: " + url);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }

  loadHTMLContent("navbar.html", navbarContainer);
  loadHTMLContent("footer.html", footerContainer);
});


