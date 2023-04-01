// Menu Bar
let menu_btn = document.getElementsByClassName("bi-three-dots")[0];
let menu_bx = document.getElementById("menu_bx");

menu_btn.addEventListener("click", () => {
  menu_bx.classList.toggle("ul_active");
});

// Scroll Button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
