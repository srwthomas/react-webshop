import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import { SignInContainer, ButtonsContainer } from "./SignInForm.style.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password" || "auth/user-not-found") {
        alert("Incorrect email or password");
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in here!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
