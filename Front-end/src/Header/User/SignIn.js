import React, { useState } from "react";
import "./SignIn.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
        alert("You Sign In Succefully");
      })
      .catch((error) => alert(error.mesage));
  };
  const Registry = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it succefully create a new user with  email and password
        if (auth) {
          history.push("/home");
          alert("Your account created succesfully");
        }
      })
      // unsuccefully
      .catch((error) => alert(error.mesage));
  };
  const LogIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/home");
        alert("You Sign In Succefully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          src="https://i.pinimg.com/564x/89/7a/61/897a61f56ec18239c658bf02cdba1b6e.jpg"
          className="signin-logo"
          alt="logo"
        />
      </Link>
      <div className="signin-container">
        <form className="signin-form">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={SignIn}
          >
            Sign In
          </Button>
          <Button className="google-button" onClick={LogIn}>
            Sign In with Google
          </Button>
        </form>
        <p className="signin-notice">
          By signing-in you agree to Fliataris E-shop Conditions of Use &
          Sale.Please see our Privacy Notice.
        </p>
        <Button className="registry-button" onClick={Registry}>
          Create your Account
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
