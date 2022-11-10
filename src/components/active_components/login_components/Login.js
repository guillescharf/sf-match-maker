import { useState } from "react";
import { Link } from "react-router-dom";

import firebaseApp from "../../../Firebase/firebase";
import { getFirestore, doc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

const Login = () => {

  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email,password);
    signInWithEmailAndPassword(auth,email,password);
  }
  return (
    <div className="login-cont">
      <form className="form-login" onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input
            type="text"
            placeholder="roberto@matchmaker.com"
            id="email"
            
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="*********"
            id="password"
          />
        </label>
        <div>
          <input type="submit" value="log in" />
          <Link to="/register"><p>Register</p></Link>
        </div>
      </form>
    </div>
  )
}

export default Login;