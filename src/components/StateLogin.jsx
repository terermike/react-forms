import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  const [enteredValue, setValue] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValue.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
  }

  function handleOnBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }
  function handleValueChange(identifier, value) {
    setValue((prevValue) => ({ ...prevValue, [identifier]: value }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
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
          onBlur={() => handleOnBlur("email")}
          onChange={(event) => handleValueChange("email", event.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && "Enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleOnBlur("password")}
          onChange={(event) =>
            handleValueChange("password", event.target.value)
          }
          value={enteredValue.password}
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
