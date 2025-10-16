import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>

      <div className="buttonContainer">
        <a href="">
          <button className="button logIn">Log In</button>
        </a>
        <a href="">
          <button className="button signUp">Sign Up</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
