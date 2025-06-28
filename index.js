document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    // Change "nextpage.html" to your actual page path
    window.location.href = "menu.html";
  }
});