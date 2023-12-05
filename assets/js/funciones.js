// $("#menu").click(function () {
//   $("#contenedormenu").slideToggle();
// });

// Funcion para el menu responsive
$("#menu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu");
});

// Funcion para desplazamiento de los vinculos
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("#contenedormenu").toggleClass("abrirmenu");
});

// Funcion para el boton subir
$(document).ready(function () {
  $("#subir").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

/*FUNCION FANCYBOX*/
Fancybox.bind('[data-fancybox="gallery"]', {});

/*Funciones de acordeon*/
$(".acordeon_title").click(function () {
  var t = $(this);
  var tp = t.next();
  tp.slideToggle();
});

/*Funcio modal*/
$(document).ready(function () {
  // Mostrar el modal después de 2 segundos
  setTimeout(function () {
   $("#modales").css("display", "flex");
}, 5000);

  // Cerrar el modal al hacer clic en el icono de cierre
  $("#close").on("click", function () {
      $("#modales").fadeOut();
  });

  $(document).mouseup(function (e) {
      var modalContent = $(".modal_content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
          $("#modales").css("display", "none");
      }
  });
});


