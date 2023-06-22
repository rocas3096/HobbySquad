const searchToggler = document.querySelector(".search-toggler");
const searchPanel = document.querySelector(".rightpanel");
const backdrop = document.querySelector(".backdrop");
const backdropLeft = document.querySelector(".backdrop-left");
const scrollable = document.querySelector(".scrollable-right");
const leftPanel = document.querySelector(".leftpanel");
const navMobileToggler = document.querySelector(".nav-logo-mobile");

searchToggler &&
  searchToggler.addEventListener("click", (e) => {
    backdrop.classList.add("open");
    searchPanel.classList.add("open");
    scrollable.classList.add("open");
  });
backdrop &&
  backdrop.addEventListener("click", (e) => {
    e.stopPropagation();
    backdrop.classList.remove("open");
    searchPanel.classList.remove("open");
    scrollable.classList.remove("open");
  });
searchPanel &&
  searchPanel.addEventListener("click", (e) => {
    e.stopPropagation();
  });
navMobileToggler &&
  navMobileToggler.addEventListener("click", (e) => {
    leftPanel.classList.add("open");
    backdropLeft.classList.add("open");
  });
backdropLeft &&
  backdropLeft.addEventListener("click", (e) => {
    e.stopPropagation();
    leftPanel.classList.remove("open");
    backdropLeft.classList.remove("open");
  });
console.log(navMobileToggler);
