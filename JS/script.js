document.addEventListener("DOMContentLoaded", function () {
    const dateSpan = document.getElementById("visit-date");
    const today = new Date().toISOString().split("T")[0];
    dateSpan.textContent = today;
});