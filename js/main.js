let blockScroll = false;
let blockPan = false;

$(".owl-carousel ").on("touchstart", "", ots);
$(".owl-carousel").on("touchmove", "", otm);

let p0 = [0, 0];

function ots(ev) {
  //save the first touch point
  p0 = [ev.touches[0].screenX, ev.touches[0].screenY];
  blockScroll = false;
  blockPan = false;
}

function otm(event) {
  if (blockScroll) event.preventDefault();
  //don't let the window v-scroll
  else if (blockPan) {
    //don't let OWL get the event and pan-x.
    event.stopPropagation();
    event.stopImmediatePropagation();
  } else {
    //calculate distance from the first touch point on every move
    let t = event.touches[0];
    let dx = t.screenX - p0[0];
    let dy = t.screenY - p0[1];

    if (Math.abs(dx) > Math.abs(dy)) {
      blockScroll = true;
      event.preventDefault();
    } else {
      blockPan = true;
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }
}

// Alert
(function () {
  let closeButtons = document.querySelectorAll(".alert-close");
  closeButtons.forEach(function (el) {
    el.addEventListener("click", function () {
      this.parentNode.remove();
      if (document.querySelector(".home-navbar")) {
        document.querySelector(".home-navbar").style.maxHeight = "72px";
      }
      document.querySelector(".wordlist").style.top = "72px";
    });
  });
})();

// Navbar
(function () {
  let navbarBurger = document.querySelector(".navbar-burger");
  let navbarMenu = document.querySelector(".navbar-menu");

  let body = document.querySelector("body");

  navbarBurger.addEventListener("click", function () {
    body.classList.toggle("menu-open");

    if (body.classList.contains("menu-open")) {
      navbarMenu.style.height = navbarMenu.scrollHeight + "px";
    } else {
      navbarMenu.style.height = "0px";
    }
  });

  // Detect scroll
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let navbar = document.querySelector(".navbar");

    if (st > 30) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  });
})();

(function () {
  let bookButtons = document.querySelectorAll(".book-event");
  let bookBg = document.querySelector(".book-popup-bg");
  let bookBody = document.querySelector(".book-popup-body");
  let body = document.querySelector("body");
  let bookPopupClose = document.querySelector(".book-popup-body .btn-close");

  // Add listeners for each book card
  if (Boolean(bookButtons.length)) {
    bookButtons.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        bookBody.querySelector("#book-price").textContent = this.querySelector(
          ".btn span:nth-child(2)"
        ).textContent;
        body.classList.add("book-isopen");
      });
    });

    // Remove popup
    bookBg.addEventListener("click", function () {
      body.classList.remove("book-isopen");
    });
    bookPopupClose.addEventListener("click", function () {
      body.classList.remove("book-isopen");
    });
  }
})();

(function () {
  let wordLetter = document.querySelectorAll(".wordlist__letter");
  wordLetter.forEach(function (el) {
    el.parentElement.insertAdjacentHTML(
      "beforeBegin",
      `<div id="block-${el.textContent.toLocaleLowerCase().trim()}" class="anchor" ></div>`
    );
  });
})();
