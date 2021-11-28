// Carousel
(function () {
  $(document).ready(function () {
    $(".problems-carousel").owlCarousel({
      loop: false,
      margin: 16,
      autoWidth: true,
    });

    $(".problems-carousel").on("changed.owl.carousel", function (e) {
      if (e.item.index == e.item.count - 1) {
        this.style.left = "calc(72vw - 12%)";
      }

      if (e.item.index == e.item.count - 2) {
        this.style.left = "calc(72vw - 75%)";
      }
      if (window.innerWidth >= 768) {
        if (e.item.index == e.item.count - 2) {
          this.style.left = "calc(72vw - 35%)";
        }

        if (e.item.index == e.item.count - 3) {
          this.style.left = "calc(72vw - 50%)";
        }
      }

      if (window.innerWidth >= 1024) {
        if (e.item.index == e.item.count - 3) {
          this.style.left = "calc(72vw - 60%)";
        }

        if (e.item.index == e.item.count - 4) {
          this.style.left = "calc(72vw - 70%)";
        }
      }
    });
  });
})();

// Offices mobile carousel

$(window).on("load", function () {
  (function () {
    function runOfficesCarousel() {
      if (window.innerWidth >= 768) {
        $(".offices-carousel").removeClass("owl-carousel");
        $(".offices-carousel")
          .trigger("destroy.owl.carousel")
          .removeClass("owl-carousel owl-loaded");
      } else {
        $(".offices-carousel").addClass("owl-carousel");
        $(".offices-carousel").owlCarousel({
          items: 4,
          loop: false,
          margin: 8,
          autoWidth: true,
        });
      }
    }

    runOfficesCarousel();

    window.addEventListener("resize", function () {
      runOfficesCarousel();
    });
  })();
});
