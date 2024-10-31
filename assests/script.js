const toggleBtn = document.querySelector(".menu");
const toggleBtnIcon = document.querySelector(".toggle-btn img");
const dropDownMenu = document.querySelector(".dropdownmenu");

toggleBtn.onclick = function () {
  if (dropDownMenu.classList.contains("open")) {
    dropDownMenu.classList.remove("open");
  } else {
    dropDownMenu.classList.add("open");
  }
};

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3.,
    },
  },
});
