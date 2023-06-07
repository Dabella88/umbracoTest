$(document).ready(function () {

  var multipleCardCarousel = document.querySelector(
    ".miniCarousel"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".miniCarousel .carousel-inner")[0].scrollWidth;
    var cardWidth = $(".miniCarousel .carousel-item").width();
    var scrollPosition = 0;
    $(".miniCarousel .carousel-control-next").on("click", function () {
    
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;

        $("#carousel-slide").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $(".miniCarousel .carousel-control-prev").on("click", function () {

      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        
        $("#carousel-slide").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

});