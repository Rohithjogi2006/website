const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    e.preventDefault(); // stop form submission
    alert("Please enter both username and password.");
  }
});
