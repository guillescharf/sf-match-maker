import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-cont">
      <form className="form-login">
        <label>
          E-mail:
          <input
            type="text"
            placeholder="roberto@matchmaker.com"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="*********"
          />
        </label>
        <div>
          <input type="submit" value="log in"/>
          <Link to="/register"><p>Register</p></Link>
        </div>
      </form>
    </div>
  )
}

export default Login;