let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
 }

 let registerBtn = document.querySelector('.account-form .register-btn');
 let loginBtn = document.querySelector('.account-form .login-btn');

 registerBtn.onclick =() =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
 };



 loginBtn.onclick =() =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
 };

 let accountForm = document.querySelector(' .account-form');

document.querySelector('#account-btn').onclick = () =>{
   accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
 }




 

  var swiper = new Swiper(".home-slider", {
    pagination:{
        el: ".swiper-pagination",

    },
    loop:true,
    grabCursor:true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });   


 


 //counter section//
 let valueDisplays =document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter =setInterval(function(){
        startValue += 1;
        valueDisplay.textContent =startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration)

});





/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}