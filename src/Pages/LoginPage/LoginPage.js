import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

import "./LoginPage.css";

const LoginPage = ({ history }) => {
  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(data => {
        console.log(data);
        history.push("/browse");
      })
      .catch(err => console.log(err));
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        history.push({
          pathname: "/browse",
          state: {
            accessToken: result.credential.accessToken
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="LoginPage">
      <h1>LoginPage</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="submit" />
      </form>
      <div style={{fontSize: "12px"}} className="createAccount">
        Don't have an account yet? <Link to="/signup">create one!</Link>
      </div>
      <div className="LoginPage__other">
        <button onClick={handleGoogleLogin}>Login with Google</button><br />
        <button onClick={handleGoogleLogin}>Login with Facebook</button><br />
        <button onClick={handleGoogleLogin}>Login with Twitter</button>
      </div>
    </div>
  );
};

export default LoginPage;
