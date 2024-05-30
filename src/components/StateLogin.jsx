import { useState } from "react";
import Input from "./Input.jsx";
import {
  isEmail,
  isNotEmpty,
  hasMinLength,
  isEqualsToOtherValue,
} from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const [enteredValue, setValue] = useState({ email: "", password: "" });
  // const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const {
    value: emailValue,
    handleOnBlur: handleEmailBlur,
    handleValueChange: handleEmailChange,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleOnBlur: handlePasswordBlur,
    handleValueChange: handlePasswordChange,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));
  // const emailIsInvalid = didEdit.email && !isEmail(enteredValue.email);
  // const passwordIsInvalid =
  //   didEdit.password &&
  //   isNotEmpty(enteredValue.password) &&
  //   !hasMinLength(enteredValue.password, 6);
  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) {
      console.log("Email or Password invalid!");
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailIsInvalid && "Enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordIsInvalid && "Enter a valid password"}
        />

        {/* <div className="control-error">
          {passwordIsInvalid && <p>Please enter a valid password.</p>}
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
