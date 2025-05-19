export default function Header() {
  return `
    <header class="main-header">
      <div class="auth-rows">
        <div class="auth-row">
          <a href="#signup" id="signup-link">Sign up</a> |
          <a href="#login" id="login-link">Log in</a>
        </div>
        <div class="auth-row">
          <a href="#profile" id="profile-link">My profile</a> |
          <a href="#logout" id="logout-link">Log out</a>
        </div>
      </div>
    </header>
  `;
}