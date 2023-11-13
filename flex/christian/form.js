let signinButton = document.querySelectorAll(".signin_page");
let signupButton  = document.querySelectorAll(".signup_page");
let signin_page = document.querySelector(".signin_signin");
let signup_page = document.querySelector(".login_form");


for(let i=0;i<3;i++){
signinButton[i].addEventListener("click",function(){
    signinButton[i].style.opacity = 1;
    signupButton[i].style.opacity = .5;
    signup_page.style.display ="block";
    signin_page.style.display ="none";
})


signupButton[i].addEventListener("click",function(){
    signinButton[i].style.opacity = .5;
    signupButton[i].style.opacity = 1;
    signin_page.style.display ="block";
    signup_page.style.display ="none";
})
}