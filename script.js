const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.getElementById("navModal");
console.log(modal);

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("d-none");
});

closeBtn.addEventListener("click", () => {
  toggleBtn.classList.remove("d-none");
});
