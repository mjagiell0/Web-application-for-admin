var email = document.forms['form']['email'];
var email_error = document.getElementById('login_error');

email.addEventListener('textInput', email_Verify);

function validated(){
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  window.location.assign('login.html');
}
function email_Verify(){
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}

