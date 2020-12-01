const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
var SLIDE_DIRECTION;
(function(SLIDE_DIRECTION2) {
  SLIDE_DIRECTION2[SLIDE_DIRECTION2["forward"] = 0] = "forward";
  SLIDE_DIRECTION2[SLIDE_DIRECTION2["backward"] = 1] = "backward";
})(SLIDE_DIRECTION || (SLIDE_DIRECTION = {}));
;
function slide(direction) {
  overlay?.classList.replace(`overlay-slide-${direction === 0 ? "left" : "right"}`, `overlay-slide-${direction === 0 ? "right" : "left"}`);
  const remove = direction === 0 ? "out" : "in";
  const add = direction === 0 ? "in" : "out";
  [nav1, nav2, nav3, nav4, nav5].forEach((el, i) => {
    el?.classList.remove(`slide-${remove}-${i + 1}`);
    el?.classList.add(`slide-${add}-${i + 1}`);
  });
}
function toggleNav() {
  menuBars?.classList.toggle("change");
  overlay?.classList.toggle("overlay-active");
  if (overlay?.classList.contains("overlay-active")) {
    slide(0);
  } else {
    slide(1);
  }
}
menuBars?.addEventListener("click", toggleNav);
nav1?.addEventListener("click", toggleNav);
nav2?.addEventListener("click", toggleNav);
nav3?.addEventListener("click", toggleNav);
nav4?.addEventListener("click", toggleNav);
nav5?.addEventListener("click", toggleNav);
