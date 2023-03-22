const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("d-none");
});

closeBtn.addEventListener("click", () => {
  toggleBtn.classList.remove("d-none");
});

const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkBtnIcon = document.querySelector(".bookmark-btn-icon");

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("active");
  bookmarkBtnIcon.classList.toggle("active");
  if (bookmarkBtn.classList.contains("active")) {
    bookmarkBtn.innerHTML = "Bookmarked";
  } else {
    bookmarkBtn.innerHTML = "Bookmark";
  }
});

bookmarkBtnIcon.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("active");
  bookmarkBtnIcon.classList.toggle("active");
  if (bookmarkBtnIcon.classList.contains("active")) {
    bookmarkBtn.innerHTML = "Bookmarked";
  } else {
    bookmarkBtn.innerHTML = "Bookmark";
  }
});
