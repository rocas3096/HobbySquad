 // document.addEventListener("DOMContentLoaded", (e) => {
//   let links = document.querySelectorAll("#anchor");
//   let groupSections = document.querySelectorAll(".group-item");
//   links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       let target = document.querySelector(link.getAttribute(`href`));
//       scrollToSection(target);
//     });
//   });
//   function scrollToSection(section) {
//     section.scrollIntoView({ behavior: "smooth" });
//     groupSections.forEach((section) => {
//       section.classList.remove("highlighted");
//     });
//     section.classList.add("highlighted");
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("#anchor");
  var sections = document.querySelectorAll(".group-item");
  // Add click event listener to each link
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      var target = document.querySelector(link.getAttribute("href")); // Get the target section
      scrollToSection(target); // Scroll to the target section
    });
  });
  // Scroll to the section and highlight it
  function scrollToSection(section) {
    var scrollOffset =
      section.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight / 3;

    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });

    // Highlight the visible section
    sections.forEach(function (section) {
      section.classList.remove("highlighted");
    });
    section.classList.add("highlighted");
  }
});

// document.addEventListener("DOMContentLoaded", (e) => {
//   let links = document.querySelectorAll("#anchor");
//   let groupSections = document.querySelectorAll(".group-item");
//   links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       let target = document.querySelector(link.getAttribute(`href`));
//       scrollToSection(target);
//     });
//   });
//   function scrollToSection(section) {
//     section.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//     window.scrollBy({ top: -(window.innerHeight / 3), behavior: "smooth" });
//     // Highlight the visible section
//     groupSections.forEach(function (section) {
//       section.classList.remove("highlighted");
//     });
//     section.classList.add("highlighted");
//   }
// });
