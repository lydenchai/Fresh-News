document.addEventListener("DOMContentLoaded", function () {
  // Load the component dynamically
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("custom-footer").innerHTML = html;
    })
    .catch((error) => console.error("Error fetching component:", error));
});
