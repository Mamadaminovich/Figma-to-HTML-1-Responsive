$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".header__content-link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".comment__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="prev__arrow slick__arrow"><img src="images/prev__arrow.svg"></button>`,
    nextArrow: `<button type="button" class="next__arrow slick__arrow"><img src="images/next__arrow.svg"></button>`,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  let acc = document.getElementsByClassName("accordion-item-btn");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      console.log(panel.style.height);
      if (panel.style.height === "0px" || panel.style.height === "") {
        panel.style.height = "100px";
      } else {
        panel.style.height = "0px";
      }
    });
  }
});
