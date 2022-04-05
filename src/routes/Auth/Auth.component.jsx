// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";

const Auth = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDoc(response.user);
  //   }
  // }, []);

  return (
    <div>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Auth;
