const navbar = document.querySelector(".museum-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");

  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");

    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    localStorage.setItem("theme", "light");

    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
});
