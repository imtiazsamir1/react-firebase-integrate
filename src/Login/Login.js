import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Please login!!</h1>
      <div style={{ margin: "20px" }}>
        <button>Google Sign In</button>
      </div>

      <form>
        <input type="email" placeholder="Your email" />
        <br />
        <input type="password" placeholder="Yor password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
