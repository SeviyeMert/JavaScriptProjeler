import { useState } from "react";

function SignIn({ CiUser, CiLock, FormHandle }) {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log(User, Password);
    setUser("");
    setPassword("");
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setUser(e.target.value)}
            value={User}
          />
          <CiUser className="icon user" />
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
        <button onClick={handleLogin}>Sign In</button>
      </form>
      <p onClick={() => FormHandle("signup")}>
        Don't have account please signup
      </p>
    </div>
  );
}

export default SignIn;
