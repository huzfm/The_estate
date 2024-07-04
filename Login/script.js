const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})



document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById("signUpButton");
    const signInButton = document.getElementById("signInButton");
    const signUpContainer = document.getElementById("signup");
    const signInContainer = document.getElementById("signIn");
  
    signUpButton.addEventListener("click", function() {
      signInContainer.style.display = "none";
      signUpContainer.style.display = "block";
    });
  
    signInButton.addEventListener("click", function() {
      signUpContainer.style.display = "none";
      signInContainer.style.display = "block";
    });
  
    // Toggle password visibility
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");
  
    togglePassword.addEventListener("click", function() {
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  
    const toggleRPassword = document.getElementById("toggleRPassword");
    const rPassword = document.getElementById("rPassword");
  
    toggleRPassword.addEventListener("click", function() {
      const type = rPassword.getAttribute("type") === "password" ? "text" : "password";
      rPassword.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  });

  