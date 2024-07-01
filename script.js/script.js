// // navbar
var openMenu = document.getElementById("show-menu");
var closeMenu = document.getElementById("close-menu");
var menu = document.getElementById("ul");

openMenu.addEventListener("click", function () {
  //   menu.sty;
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  menu.style.top = "0%";
});
closeMenu.addEventListener("click", function () {
  menu.style.top = "-880%";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

let blur = document.getElementById("crsr-blur");
let crsr = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  crsr.style.top = y + "px";
  crsr.style.left = x + "px";
});
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  blur.style.top = y - 125 + "px";
  blur.style.left = x - 125 + "px";
});

// for all

let elem = document.querySelectorAll(".projects");
elem.forEach(function (val) {
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[2].style.top = dets.y + "-100" + "px";
    val.childNodes[2].style.left = dets.x + "px";
  });
  val.addEventListener("mouseenter", function (dets) {
    val.childNodes[2].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function (dets) {
    val.childNodes[2].style.opacity = "0";
  });
});
