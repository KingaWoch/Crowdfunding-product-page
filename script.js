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
  console.log(bookmarkBtn.classList[4]);
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

const labels = document.querySelectorAll(".modal-label");

labels.forEach((label) => {
  label.addEventListener("click", () => {
    if (!label.parentNode.classList.contains("active")) {
      label.parentNode.classList.toggle("active");
    } else {
      labels.forEach((label) => {
        label.parentNode.classList.remove("active");
      });
      label.parentNode.classList.add("active");
    }
  });
});

const inputs = document.querySelectorAll("input[type=number]");
const continueBtn = document.querySelectorAll(".continue");
const totalValue = document.querySelector(".total-value");
totalValue.innerHTML = JSON.parse(localStorage.getItem("value")) || "89,914";
const totalBackers = document.querySelector(".total-backers");
totalBackers.innerHTML = JSON.parse(localStorage.getItem("backers")) || "5,007";
const progressBar = document.querySelector(".progress-bar");
// console.log(progressBar.ariaValueNow);
// console.log(
//   (Number(totalValue.innerHTML.replace(/[^0-9\.]+/g, "")) / 100000) * 100 + "%"
// );

//console.log(continueBtn);
//console.log(inputs);

// console.log(totalValue.innerHTML);
//console.log(Number(totalValue.innerHTML.replace(/[^0-9\.]+/g, "")));

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    totalValue.innerHTML =
      "$" +
      (
        Number(totalValue.innerHTML.replace(/[^0-9\.]+/g, "")) +
        parseInt(input.value)
      ).toLocaleString("en-US");
    localStorage.setItem("value", JSON.stringify(totalValue.innerHTML));
    // progressBar.ariaValueNow =
    //   Number(totalValue.innerHTML.replace(/[^0-9\.]+/g, "")) +
    //   parseInt(input.value);
    // progressBar.style.width =
    //   progressBar.style.width +
    //   (Number(totalValue.innerHTML.replace(/[^0-9\.]+/g, "")) / 100000) * 100 +
    //   "%";
  });
});

// console.log(progressBar.style.width);

continueBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    totalBackers.innerHTML = (
      parseInt(totalBackers.innerHTML.replaceAll(",", "")) + 1
    ).toLocaleString("en-US");
    localStorage.setItem("backers", JSON.stringify(totalBackers.innerHTML));
  });
});
