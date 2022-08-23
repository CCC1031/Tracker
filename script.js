// const showPassword = document.querySelector("#show-password"); 
// const passwordField = document.querySelector("#password"); 

// showPassword.addEventListener('click', function(){
//     const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
//     passwordField.setAttribute("type", type);
// })
function myFunction() {
    const show = document.getElementById("password");
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  }