const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (emailValue === "") {
    emailFeedback.textContent = "";
    emailFeedback.className = "feedback";
  } else if (isValidEmail) {
    emailFeedback.textContent = "✓ Valid email";
    emailFeedback.className = "feedback success";
  } else {
    emailFeedback.textContent = "Invalid email format";
    emailFeedback.className = "feedback error";
  }
});

confirmPasswordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (confirmPassword === "") {
    passwordFeedback.textContent = "";
    passwordFeedback.className = "feedback";
  } else if (password === confirmPassword) {
    passwordFeedback.textContent = "✓ Passwords match";
    passwordFeedback.className = "feedback success";
  } else {
    passwordFeedback.textContent = "Passwords do not match";
    passwordFeedback.className = "feedback error";
  }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
