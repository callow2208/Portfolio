// This script adds a background to the navbar when the page is scrolled down

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  
  