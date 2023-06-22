 let nextGroupBtn = document.querySelector(".next-group");
let joinGroupBtn = document.querySelector(".join-group");
nextGroupBtn?.addEventListener("click", (e) => {
  let currentGroup = parseInt(e.target.id.split("-")[0]);
  const groupsLen = parseInt(e.target.id.split("-")[1]);
  if (currentGroup !== groupsLen) {
    currentGroup += 1;
  } else {
    currentGroup = 1;
  }
  window.location.replace(`/user-panel/group/${currentGroup}`);
});
