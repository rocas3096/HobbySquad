import "./toggleNav.js";
import "./handleSearchToggle.js";
import "./handleScrollToGroups.js";
import "./form-validation.js";
import "./leave-group.js";

import "./groupHelpers.js";
import "./handleModal.js";

let currentPath = location.pathname;
const explore = document.querySelector("#explore");
const group = document.querySelector("#groups");

switch (currentPath) {
  case "/user-panel":
    explore?.classList.add("active");
    break;
  case "/user-panel/groups":
    group?.classList.add("active");
    break;
  default:
    break;
}
console.log({ currentPath });
console.log("EE");
