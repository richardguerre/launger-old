import React from "react";
import firebase from "../../Helpers/Firebase";

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
    if (password.value !== confirm.value){
      alert("Passwords don't match");
      return;
    }

    // Create user with email and pass.
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then( (data) => console.log(data))
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

    // TODO: determine signup flow
    // history.push("/browse")
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
        <label>
          Email:
          <input type="email" placeholder="Please enter email" name="email"/>
          <br />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Please enter password" name="password"/>
          <br />
        </label>
        <label>
          Confirm:
          <input type="password" placeholder="Please enter password" name="confirm"/>
          <br />
        </label>
        <input type="submit" />
      </form>
      <div className="SignupPage__other">Or login with:</div>
    </div>
  );
};

export default SignupPage;
