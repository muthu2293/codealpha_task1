const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const SigninBtn = document.getElementById('SigninBtn');
const SignupBtn = document.getElementById('SignupBtn');

SignupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
}

SigninBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}