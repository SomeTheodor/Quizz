const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header');

hamburger.addEventListener('click',()=>{
     hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = '#343d82';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

window.addEventListener("scroll", function(){
    var navbar = document.querySelector("section");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  })