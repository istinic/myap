import { countries } from '../assets/countries.js';

export default function SignUp() {
  const countryOptions = countries.map(
    c => `<option value="${c.code}">${c.name}</option>`
  ).join("");
  return `
    <section id="sign-up">
      <h2>Sign Up</h2>
      <form id="signUpForm" autocomplete="off">
        <div>
          <label>
            Email (required):<br>
            <input type="email" name="email" required autocomplete="email">
          </label>
        </div>
        <div>
          <label>
            Username (required):<br>
            <input type="text" name="username" required autocomplete="username">
          </label>
        </div>
        <div>
          <label>
            Password (required):<br>
            <input type="password" name="password" required autocomplete="new-password">
          </label>
        </div>
        <div>
          <label>
            Confirm Password (required):<br>
            <input type="password" name="confirmPassword" required autocomplete="new-password">
          </label>
        </div>
        <div>
          <label>
            Country (required):<br>
            <select name="country" id="countrySelect" required>
              <option value="">Select your country</option>
              ${countryOptions}
            </select>
            <span id="selectedFlag" style="margin-left: 8px;"></span>
          </label>
        </div>
        <div id="signUpError" style="margin-top:6px;"></div>
        <div style="margin-top:10px;">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  `;
}