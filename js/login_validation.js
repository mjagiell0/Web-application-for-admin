//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var log_error = document.getElementById('login_error');


email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated(){
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    log_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    log_error.style.display = "block";
    password.focus();
    return false;
  }
  window.location.assign('main_window.html');
}
function email_Verify(){
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    log_error.style.display = "none";
    return true;
  }
}
function pass_Verify(){
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    log_error.style.display = "none";
    return true;
  }
}

