import Header from './components/Header.js';
import Nav from './components/Nav.js';
import SignUp from './components/SignUp.js';
import PlayerProfile from './components/PlayerProfile.js';
import GameTable from './components/GameTable.js';
import Footer from './components/Footer.js';

// Render all components into #app
const app = document.getElementById('app');
app.innerHTML =
  Header() +
  Nav() +
  SignUp() +          // Show SignUp before PlayerProfile
  PlayerProfile() +
  GameTable() +
  Footer();

// --- Dynamic country flag update in SignUp form ---
document.addEventListener('change', function (e) {
  if (e.target && e.target.id === 'countrySelect') {
    const code = e.target.value;
    const flagSpan = document.getElementById('selectedFlag');
    if (code) {
      flagSpan.className = `fi fi-${code}`;
      flagSpan.textContent = ''; // Remove any text if present
    } else {
      flagSpan.className = '';
      flagSpan.textContent = '';
    }
  }
});

// --- Basic SignUp form validation ---
document.addEventListener('submit', function (e) {
  if (e.target && e.target.id === 'signUpForm') {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const username = form.username.value.trim();
    const country = form.country.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const errorDiv = document.getElementById('signUpError');
    errorDiv.style.color = 'red';
    errorDiv.textContent = '';

    // Validate required fields
    if (!email || !username || !country || !password || !confirmPassword) {
      errorDiv.textContent = 'Please fill in all required fields.';
      return;
    }
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorDiv.textContent = 'Please enter a valid email address.';
      return;
    }
    // Passwords must match
    if (password !== confirmPassword) {
      errorDiv.textContent = 'Passwords do not match.';
      return;
    }
    // You can add more validation or backend checks here

    // Success demo message
    errorDiv.style.color = 'green';
    errorDiv.textContent = 'Sign up successful! (Demo only)';
    form.reset();
    document.getElementById('selectedFlag').className = '';
  }
});