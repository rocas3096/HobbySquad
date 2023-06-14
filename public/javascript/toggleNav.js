const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.body.scrollTop >= 50) {
    navbar.classList.add("scrolling");
    navbar.classList.remove("not-scrolling");
  } else {
    navbar.classList.remove("scrolling");
    navbar.classList.add("not-scrolling");
  }
};
let dropdown = document.querySelectorAll(".nav-dropdown");
window.addEventListener("click", (e) => {
  if (e.target.className !== "toggler") {
    Array.from(dropdown).map((dd) => dd.classList.remove("activate-dropdown"));
  }
});

const toggleNav = (e) => {
  console.log(e.target);
  Array.from(dropdown).map((dd) => {
    if (dd.classList.contains("activate-dropdown")) {
      dd.classList.remove("activate-dropdown");
    } else {
      dd.classList.add("activate-dropdown");
    }
  });
};

let toggler = document.querySelectorAll(".toggler");
Array.from(toggler).map((toggle) =>
  toggle.addEventListener("click", toggleNav)
);
