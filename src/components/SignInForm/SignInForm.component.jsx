import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils.js";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import "./SignInForm.style.sass";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

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
      resetFormFields();
    } catch (err) {}
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDoc(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in here!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <Button type="submit">Sign in</Button>
        <Button buttonType="google-sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
