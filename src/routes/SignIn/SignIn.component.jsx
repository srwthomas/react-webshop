// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDoc(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
