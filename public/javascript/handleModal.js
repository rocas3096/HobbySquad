 const createGroupModal = document.querySelector(".modal");
const createGroupLink = document.querySelector(".create-group");
const exit = document.querySelector(".exit");

createGroupLink &&
  createGroupLink.addEventListener("click", (e) => {
    console.log(e.target);
    createGroupModal.classList.add("open");
  });
exit &&
  exit.addEventListener("click", (e) => {
    createGroupModal.classList.remove("open");
  });
