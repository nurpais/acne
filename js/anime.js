window.addEventListener("load", function (event) {
  if (document.querySelector(".home-navbar")) {
    document.querySelector("#hero-video").play();
    document.querySelector("#hero-video").style.opacity = "1 ";
    document.querySelector("body").classList.add("home-animate");
  }
});

window.addEventListener("scroll", () => {
  if (document.querySelector("#hero-video")) {
    document.querySelector(".hero__body").style.opacity = `${
      1 - window.pageYOffset / 500
    }`;
  }
});

// Section observe
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".about-carousel .col-md-5 .about-card")
    .forEach((el) => {
      el.classList.add("block-animate");
    });

  document
    .querySelectorAll(".about-carousel .col-md-5:nth-child(even) .about-card")
    .forEach((el) => {
      el.classList.add("animate-delay-2");
    });

  // Problems card
  document.querySelectorAll(".skin-cards .skin-card").forEach((el) => {
    el.classList.add("block-animate");
  });

  document
    .querySelectorAll(".skin-cards .skin-card:nth-child(3n+2)")
    .forEach((el) => {
      el.classList.add("animate-delay-2");
    });

  document
    .querySelectorAll(".skin-cards .skin-card:nth-child(3n+3)")
    .forEach((el) => {
      el.classList.add("animate-delay-4");
    });

  // Procedure card
  document
    .querySelectorAll(".procedure-cards .procedure-card")
    .forEach((el) => {
      el.classList.add("block-animate");
    });

  document
    .querySelectorAll(".procedure-cards .procedure-card:nth-child(3n+2)")
    .forEach((el) => {
      el.classList.add("animate-delay-2");
    });

  document
    .querySelectorAll(".procedure-cards .procedure-card:nth-child(3n+3)")
    .forEach((el) => {
      el.classList.add("animate-delay-4");
    });

  // Result card
  document.querySelectorAll(".result-cards .result-card").forEach((el) => {
    el.classList.add("block-animate");
  });

  document
    .querySelectorAll(".result-cards .result-card:nth-child(3n+2)")
    .forEach((el) => {
      el.classList.add("animate-delay-2");
    });

  document
    .querySelectorAll(".result-cards .result-card:nth-child(3n+3)")
    .forEach((el) => {
      el.classList.add("animate-delay-4");
    });

  // Service list
  document.querySelectorAll(".serv-list li").forEach((el) => {
    el.classList.add("block-animate");
  });
});

// Result card
document.querySelectorAll(".about-section .about-card").forEach((el) => {
  el.classList.add("block-animate");
});

document
  .querySelectorAll(".about-section .col-md-5:nth-child(even) .about-card")
  .forEach((el) => {
    el.classList.add("animate-delay-2");
  });

// Skin problems
if (document.querySelector(".skin-hero__body")) {
  document.querySelector(".skin-hero__body h1").classList.add("block-animate");
  document
    .querySelector(".skin-hero__body p")
    .classList.add("block-animate", "animate-delay-2");
}

// Skin problems content
document.querySelectorAll(".skin-single .content").forEach((el) => {
  el.classList.add("block-animate");
});

// Cta cards
if (document.querySelector(".cta-cards")) {
  document
    .querySelector(".cta-cards > *:first-child")
    .classList.add("block-animate");

  document
    .querySelector(".cta-cards > *:last-child")
    .classList.add("block-animate", "animate-delay-2");
}

// Procedure
if (document.querySelector(".procedure-section")) {
  document
    .querySelector(".procedure-section h1")
    .classList.add("block-animate");
  document
    .querySelector(".procedure-section p.mt-3")
    .classList.add("block-animate", "animate-delay-2");
  if (document.querySelector(".procedure-section .video")) {
    document
      .querySelector(".procedure-section .video")
      .classList.add("block-animate", "animate-delay-4");
  }

  if (document.querySelector(".procedure-section .procedure__screen")) {
    document
      .querySelector(".procedure-section .procedure__screen")
      .classList.add("block-animate", "animate-delay-4");
  }
}

// Procedure content
document.querySelectorAll(".procedure-section .content").forEach((el) => {
  el.classList.add("block-animate");
});

// Wordlist content
document.querySelectorAll(".wordlist-section .content").forEach((el) => {
  el.classList.add("block-animate");
});

document.querySelectorAll(".wordlist__block").forEach((el) => {
  el.classList.add("block-animate");
});
// Section observe
document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block-animate");
  const btns = document.querySelectorAll(".opacity-animate");
  const stepCircles = document.querySelectorAll(".step-circle");

  const options = {
    threshold: [0.3],
  };

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (window.innerWidth >= 768) {
          if (el.classList.contains("animate-delay-2")) {
            setTimeout(() => {
              el.classList.add("animate");
            }, 200);
          } else if (el.classList.contains("animate-delay-4")) {
            setTimeout(() => {
              el.classList.add("animate");
            }, 400);
          } else {
            el.classList.add("animate");
          }
        } else {
          el.classList.add("animate");
        }
      }
    });
  }

  function stepCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "scale(1)";
      }
    });
  }

  function wordCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveToWord(
          entry.target
            .querySelector(".wordlist__letter")
            .textContent.trim()
            .toLowerCase()
        );
      }
    });
  }

  let letters = document.querySelectorAll(".wordlist__letters li a");
  const words = document.querySelectorAll(".wordlist__block");

  function setActiveToWord(word) {
    for (let i = 0; i < letters.length; i++) {
      letters[i].classList.remove("active");
      if (letters[i].textContent.toLowerCase() == word) {
        letters[i].classList.add("active");
      }
    }
  }

  const observer = new IntersectionObserver(callback, options);
  const stepObserver = new IntersectionObserver(stepCallback, options);
  const wordObserver = new IntersectionObserver(wordCallback, {
    rootMargin: "30% 0px 40% 0px",
    threshold: [0.6],
  });

  blocks.forEach((block) => observer.observe(block));
  btns.forEach((btn) => observer.observe(btn));
  stepCircles.forEach((stepCircle) => stepObserver.observe(stepCircle));
  words.forEach((word) => wordObserver.observe(word));
});

// $(".parallax-window-mobile").parallax();
