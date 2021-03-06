// Выпадающее меню
var subitems = document.querySelector(".drop-down-nav__subitems");

subitems.classList.remove("drop-down-nav__subitems--nojs");

if (subitems !== null) {
  subitems.addEventListener("mouseover", function() {
    if (subitems.classList.contains("drop-down-nav__subitems--closed")) {
      subitems.classList.remove("drop-down-nav__subitems--closed");
      subitems.classList.add("drop-down-nav__subitems--opened");
    }
  });
}

if (subitems !== null) {
  subitems.addEventListener("mouseout", function() {
    if (subitems.classList.contains("drop-down-nav__subitems--opened")) {
      subitems.classList.remove("drop-down-nav__subitems--opened");
      subitems.classList.add("drop-down-nav__subitems--closed");
    }
  });
}

// Интерактивное меню
var navMain = document.querySelector(".int-nav");
var navToggle = document.querySelector(".int-nav__toggle");

navMain.classList.remove("int-nav--nojs");

if (navToggle !== null) {
  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("int-nav--closed")) {
      navMain.classList.remove("int-nav--closed");
      navMain.classList.add("int-nav--opened");
    } else {
      navMain.classList.add("int-nav--closed");
      navMain.classList.remove("int-nav--opened");
    }
  });
}

// Примеры-спойлеры
var spoiler = document.querySelectorAll(".lib-block__spoiler");
var example = document.querySelectorAll(".lib-block__example");

for (var i = 0; i < spoiler.length; i++) {
  spoiler[i].addEventListener("click", function() {
    for (var k = 0; k < example.length; k++) {
      if (example[k].classList.contains("lib-block__example--closed")) {
        example[k].classList.remove("lib-block__example--closed");
        example[k].classList.add("lib-block__example--show");
      } else if (example[k].classList.contains("lib-block__example--show")) {
        example[k].classList.remove("lib-block__example--show");
        example[k].classList.add("lib-block__example--closed");
      }
    }
  });
}

// Картинка-миниатюра + overlay к ней
var mini = document.querySelector(".mini-image__dragon");
var big = document.querySelector(".mini-image__dragon-big");
var cross = document.querySelector(".mini-image__cross");
var overlay = document.querySelector(".overlay");

// Открытие
if (mini !== null) {
  mini.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--closed")) {
      big.classList.remove("mini-image__dragon-big--closed");
      big.classList.add("mini-image__dragon-big--opened");
    }
  });
}

if (mini !== null) {
  mini.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--closed")) {
      cross.classList.remove("mini-image__cross--closed");
      cross.classList.add("mini-image__cross--opened");
    }
  });
}

if (mini !== null) {
  mini.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--closed")) {
      overlay.classList.remove("overlay--closed");
      overlay.classList.add("overlay--opened");
    }
  });
}

// Закрытие по крестику
if (cross !== null) {
  cross.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--opened")) {
      big.classList.remove("mini-image__dragon-big--opened");
      big.classList.add("mini-image__dragon-big--closed");
    }
  });
}

if (cross !== null) {
  cross.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--opened")) {
      cross.classList.remove("mini-image__cross--opened");
      cross.classList.add("mini-image__cross--closed");
    }
  });
}

if (cross !== null) {
  cross.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--opened")) {
      overlay.classList.remove("overlay--opened");
      overlay.classList.add("overlay--closed");
    }
  });
}

// Закрытие по overlay
if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--opened")) {
      big.classList.remove("mini-image__dragon-big--opened");
      big.classList.add("mini-image__dragon-big--closed");
    }
  });
}

if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--opened")) {
      cross.classList.remove("mini-image__cross--opened");
      cross.classList.add("mini-image__cross--closed");
    }
  });
}

if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--opened")) {
      overlay.classList.remove("overlay--opened");
      overlay.classList.add("overlay--closed");
    }
  });
}
