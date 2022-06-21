// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";

import { AuthContainer } from "./Auth.style.jsx";

const Auth = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDoc(response.user);
  //   }
  // }, []);

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </AuthContainer>
  );
};

export default Auth;
