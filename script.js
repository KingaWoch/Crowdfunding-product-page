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
const totalBackers = document.querySelector(".total-backers");
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
  });
});
