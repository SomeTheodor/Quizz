window.addEventListener("scroll", function(){
    var navbar = document.querySelector("section");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  })