const leaveGroupButton = document.querySelector(".leave-group");

leaveGroupButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Perform an AJAX request to the server to leave the group
  fetch(event.target.href, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // Refresh the page or update the UI accordingly
        location.reload();
      } else {
        // Handle the error response
        console.error("Failed to leave the group");
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
