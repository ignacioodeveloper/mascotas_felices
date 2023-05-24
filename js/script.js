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

});




