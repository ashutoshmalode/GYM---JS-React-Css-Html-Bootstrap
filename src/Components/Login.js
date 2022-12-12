import { Link } from "react-router-dom";
import "./component.css";

function Login() {
  return (
    <div className="login">
      <div className="login1">
        <form className="form">
          <h3 className="admin">Admin Login</h3>
          <br />
          <div className="email" >
            <label htmlFor="exampleInputEmail1">
              <b>Email address :</b>
              &nbsp; &nbsp;
            </label>
            <input
              type="email"
              className="email1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="password">
            <label htmlFor="exampleInputPassword1">
              <b>Password :</b>
              &nbsp; &nbsp;
            </label>
            <input
              type="password"
              className="password1"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <div className="login-btn">
            <Link className="nav-link" to="/about">
              <button type="submit" className="btn btn-primary" >
                Login
              </button>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
