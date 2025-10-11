import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";

function SignUp({ CiUser, CiLock, FormHandle }) {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!User || !Password || !Email) return;

    console.log(User, Email, Password);
    setUser("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your user Name"
            onChange={(e) => setUser(e.target.value)}
            value={User}
          />
          <CiUser className="icon user" />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your mail"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
          <MdAlternateEmail className="icon user" />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <CiLock className="icon password" />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
      </form>
      <p onClick={() => FormHandle("login")}>
        Already have an account please SignIn
      </p>
    </div>
  );
}

export default SignIn;
