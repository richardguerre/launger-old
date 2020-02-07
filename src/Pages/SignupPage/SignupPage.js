import React from "react";
import firebase from "firebase/app";
import "./SignupPage.css";

const SignupPage = ({ history }) => {
  const handleSignUp = e => {
    e.preventDefault();
    const { email, password, confirm } = e.target.elements;

    if (email.value.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.value.length < 4) {
      alert("Please enter a password.");
      return;
    }
    if (password.value !== confirm.value) {
      alert("Passwords don't match");
      return;
    }

    // Create user with email and pass.
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(data => {
        console.log(data);
        history.push("/browse");
      })
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

    // TODO: finalize signup flow
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //     // Handle Errors here.
  //     let errorCode = error.code;
  //     let errorMessage = error.message;
  //     // ...
  //   });

  //   // TODO: determine signup flow
  //   // history.push("/browse")
  // }

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="Email" name="email" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <input type="password" placeholder="Confirm" name="confirm" />
        <br />
        <input type="submit" />
      </form>
      <div className="SignupPage__other">
        Or login with:
        <button onClick={handleGoogleLogin}>Login with google</button>
      </div>
    </div>
  );
};

export default SignupPage;
