import React from "react";
import "./Auth.css"; // Import CSS for styling
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
function GoogleSignInButton({ onClick }) {
  return (
    <button className="google-signin-button" onClick={onClick}>
      Sign in with Google
    </button>
  );
}

function Auth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    // Handle Google sign-in logic here
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const user = resultsFromGoogle.user;
      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          googlePhotoUrl: user.photoURL,
        }),
      });
      const data = await res.json();
      console.log("User signed in:", user);
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Sign in with Google clicked");
  };

  return (
    <div className="auth-container">
      <GoogleSignInButton onClick={handleGoogleSignIn} />
    </div>
  );
}

export default Auth;
