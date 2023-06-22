 const leaveGroupButton = document.querySelector(".leave-group");

leaveGroupButton?.addEventListener("click", (event) => {
  event.preventDefault();


  fetch(event.target.href, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // Refresh the page
        location.reload();
      } else {
        console.error("Failed to leave the group");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
