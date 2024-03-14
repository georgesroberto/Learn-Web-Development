// JavaScript (script.js)

// Initialize an empty array to store user data
const users = [];

// Get form element
const registrationForm = document.getElementById("registrationForm");

// Event listener for form submission
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  // Validate password and confirm password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Create user object
  const user = {
    username,
    email,
    password,
    phone,
  };

  // Add user to the array
  users.push(user);

  // Clear form inputs
  registrationForm.reset();

  // Redirect to index.html (you can customize the URL)
  window.location.href = "index.html";
});

// script.js
// const form = document.getElementById("myForm");
// const usernameInput = document.getElementById("username");
// const emailInput = document.getElementById("email");
// const usernameError = document.getElementById("usernameError");
// const emailError = document.getElementById("emailError");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Validate username (minimum 3 characters)
//   if (usernameInput.value.trim().length < 3) {
//     usernameError.style.display = "block";
//   } else {
//     usernameError.style.display = "none";
//   }

//   // Validate email (simple format check)
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (!emailPattern.test(emailInput.value)) {
//     emailError.style.display = "block";
//   } else {
//     emailError.style.display = "none";
//   }
// });
