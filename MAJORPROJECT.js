// Function to validate form fields on submit
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Reset all error messages
  resetErrors();

  // Fetch form values
  let fullName = document.getElementById('fullName').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  // Validate each field
  let isValid = true;

  // Validate Full Name (at least 5 characters)
  if (fullName.length < 5) {
      document.getElementById('fullNameError').innerText = 'Full Name must be at least 5 characters';
      isValid = false;
  }

  // Validate Email (must contain @)
  if (!email.includes('@')) {
      document.getElementById('emailError').innerText = 'Enter a valid Email address';
      isValid = false;
  }

  // Validate Phone Number (must be 10 digits and not 123456789)
  if (phone.length !== 10 || phone === '123456789') {
      document.getElementById('phoneError').innerText = 'Enter a valid 10-digit Phone Number';
      isValid = false;
  }

  // Validate Password (not 'password', user's name, and at least 8 characters)
  if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
      document.getElementById('passwordError').innerText = 'Password must be at least 8 characters and not the word "password"';
      isValid = false;
  }

  // Validate Confirm Password (must match Password)
  if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
      isValid = false;
  }

  // If form is valid, submit it (can replace with actual submission logic)
  if (isValid) {
      alert('Form submitted successfully!');
      document.getElementById('registrationForm').reset(); // Reset form after submission
  }
});

// Function to reset all error messages
function resetErrors() {
  document.getElementById('fullNameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('phoneError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  document.getElementById('confirmPasswordError').innerText = '';
}
