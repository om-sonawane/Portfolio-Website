const body = document.body;
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");
const logo = document.getElementById('logo'); // logo id banvli ahe main madhy
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('')).window;

// Function to add a theme class to the body and button
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
  logo.src = bodyClass === 'dark' ? '/icons/logo dark.png' : '/icons/logo light.png'; //  doghi theme sathi vegle logo takle ahe .
};

// Get the current theme from local storage
const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

// Apply the theme class and logo on page load
addThemeClass(getBodyTheme, getBtnTheme);

// Check if the current theme is dark
const isDark = () => body.classList.contains("dark");

// Function to set a new theme and update local storage
const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

// Toggle theme function
const toggleTheme = () => {
  const newTheme = isDark() ? "light" : "dark";
  const newBtnClass = isDark() ? "fa-moon" : "fa-sun";
  setTheme(newTheme, newBtnClass);
};

btnTheme.addEventListener("click", toggleTheme);

// Function to handle the hamburger menu display
const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};


// Optional: Automatically toggle theme based on user preference
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleTheme();
}
btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);
