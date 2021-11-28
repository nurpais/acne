(function () {
  let quizItems = document.querySelectorAll(".quiz-item");
  let nextButton = document.querySelectorAll(".next-quiz");
  let prevButton = document.querySelector("#prev");
  let quizProgress = document.querySelector("#quiz-progress");
  let body = document.querySelector("body");

  let progress = 0;
  let currentItem = 0;

  //   function for next

  nextButton.forEach(function (el) {
    el.addEventListener("click", function (el) {
      if (currentItem < quizItems.length - 1) {
        currentItem++;
        hideAllShowActive(currentItem);
        progressBar(true);
      }
    });
  });

  //   function for prev
  prevButton.addEventListener("click", function (el) {
    if (currentItem > 0) {
      currentItem--;
      hideAllShowActive(currentItem);
      progressBar(false);
    }
  });

  function hideAllShowActive(el) {
    quizItems.forEach(function (el) {
      el.style.display = "none";
    });
    if (!el) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "inline-flex";
    }
    quizItems[el].style.display = "block";
    // quizItems[4].style.display = "block";
  }

  function progressBar(next) {
    if (next) {
      progress += 100 / quizItems.length;
      quizProgress.style.width = progress + "%";
    } else {
      progress -= 100 / quizItems.length;
      quizProgress.style.width = progress + "%";
    }
  }

  progressBar(true);
  hideAllShowActive(currentItem);

  //   ====================
  let genderItemsRadio = quizItems[0].querySelectorAll("input[type='radio']");
  let genderDate = quizItems[0].querySelector(".quiz-date");

  let areas = quizItems[1].querySelectorAll("input");
  let zones = quizItems[2].querySelectorAll("input");
  let symptoms = quizItems[3].querySelectorAll("input");

  genderItemsRadio.forEach(function (el) {
    el.addEventListener("input", function (el) {
      addValidClasses(this.checked, "gender-valid", quizItems[0]);
    });
  });

  genderDate.addEventListener("input", function () {
    addValidClasses(this.value, "date-valid", quizItems[0]);
  });

  areas.forEach(function (el) {
    el.addEventListener("input", function (el) {
      for (let i = 0; i < areas.length; i++) {
        if (areas[i].checked) {
          addValidClasses(true, "valid-item", quizItems[1]);
          return;
        } else {
          addValidClasses(false, "valid-item", quizItems[1]);
        }
      }
    });
  });

  zones.forEach(function (el) {
    el.addEventListener("input", function (el) {
      for (let i = 0; i < zones.length; i++) {
        if (zones[i].checked) {
          addValidClasses(true, "valid-item", quizItems[2]);
          return;
        } else {
          addValidClasses(false, "valid-item", quizItems[2]);
        }
      }
    });
  });

  symptoms.forEach(function (el) {
    el.addEventListener("input", function (el) {
      for (let i = 0; i < symptoms.length; i++) {
        if (symptoms[i].checked) {
          addValidClasses(true, "valid-item", quizItems[3]);
          return;
        } else {
          addValidClasses(false, "valid-item", quizItems[3]);
        }
      }
    });
  });

  function addValidClasses(value, className, el) {
    if (value) {
      el.classList.add(`${className}`);
    } else {
      el.classList.remove(`${className}`);
    }
  }

  let quizPhotos = document.querySelectorAll(".file-cards .quiz-photo");

  quizPhotos.forEach(function (el) {
    el.addEventListener("change", function (event) {
      this.nextElementSibling.src = URL.createObjectURL(event.target.files[0]);
    });
  });

  document.querySelector("#start").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".layer-1").style.display = "none";
    document.querySelector(".quiz-layer").style.display = "block";
  });
})();
