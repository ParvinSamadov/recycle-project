$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<svg class='icon icon-arrow-right-service-shape custom-arrow' style='fill: #869791;width:50px;height:30px;'><use xlink:href='./assets/icons/icons.svg#icon-left-arrow' ></use></svg>",
      "<svg class='icon custom-arrow icon-arrow-right-service-shape' style='fill: #869791;width:50px;height:30px;'><use xlink:href='./assets/icons/icons.svg#icon-right-arrow'></use></svg>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 3,
      },
      1220: {
        items: 5,
        dots: true,
      },
    },
  });
  $(".owl-nav").after(
    "<div class='divider-container d-none d-xl-block'><div class='divider'></div></div>"
  );
});
