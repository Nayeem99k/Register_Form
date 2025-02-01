// Toggle between Login and Registration forms
document.getElementById('showLogin').addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('showRegister').addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

// Handle Registration Form Submission
document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Check if user already exists
  if (localStorage.getItem(email)) {
    alert('User already exists!');
    return;
  }

  // Save user data to localStorage with email as the key
  const userData = { name, email, password };
  localStorage.setItem(email, JSON.stringify(userData));

  alert('Registration successful! Please login.');
  document.getElementById('register').reset();
  document.getElementById('showLogin').click(); // Switch to login form
});

// Handle Login Form Submission
document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem(email));

  // Check if user exists and credentials match
  if (userData && userData.password === password) {
    alert(`Welcome back, ${userData.name}!`); // Show the user's name
    document.getElementById('login').reset();
  } else {
    alert('Invalid email or password!');
  }
});