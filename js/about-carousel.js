// About mobile carousel
(function () {
  function runAboutSlider() {
    if (window.innerWidth >= 768) {
      $(".about-carousel").removeClass("owl-carousel");
      $(".about-carousel").trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
    } else {
      $(".about-carousel").addClass("owl-carousel");
      $(".about-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
      });
    }
  }

  runAboutSlider();

  window.addEventListener("resize", function () {
    runAboutSlider();
  });
})();
