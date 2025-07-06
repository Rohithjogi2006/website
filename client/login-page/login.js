const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    e.preventDefault();
    alert("Please enter both username and password.");
  }
});

const showpassword=document.getElementById("showpassword");
const passwordField=document.getElementById("password");

showpassword.addEventListener("change",function() {
  if (this.checked){
    passwordField.setAttribute("type","text");
  }
  else{
    passwordField.setAttribute("type","password");
  }

});