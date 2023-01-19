/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "styles/auth.module.scss";
import axios from "axios";

type FormEvent = React.FormEvent<HTMLFormElement>;

const LoginWithMobile = () => {
  const [state, setState] = React.useState("");

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > 10) return;
      setState(event.target.value);
    },
    []
  );
  const onSubmit = React.useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (state) {
        alert("Login with mobile number");
      }
    },
    [state]
  );

  const AuthWithGoogle = () => {
    try {
      window.open("http://localhost:5000/auth/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css["container"]}>
      <div className={css["grid"]}>
        <div className={css["inputs"]}>
          <div className={css["logo"]}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/171/171322.png"
              alt="logo"
            />
            <p>
              Don’t have an account?
              <Link href={"/auth/sign-up"}>Sign Up</Link>
            </p>
          </div>
          <div>
            <div className={css["message"]}>
              <h1>Welcome Back</h1>
              <p>Login into your account</p>
            </div>

            <div className={css["social"]}>
              <div className={css["icons"]}>
                <a
                  onClick={AuthWithGoogle}
                  // href={"http://localhost:5000/google"}
                  className={css["item"]}
                >
                  <img src="/svg/google.svg" alt="google" />
                  <p>Google</p>
                </a>
                <Link href={"/"} className={css["item"]}>
                  <img src="/svg/facebook.svg" alt="google" />
                  <p>Facebook</p>
                </Link>
              </div>
            </div>

            <div className={css["line"]}>
              <p>Or continue with</p>
            </div>
            <div className={css["login-form"]}>
              <form onSubmit={onSubmit}>
                <input
                  autoComplete="off"
                  placeholder="eg +91 Login with Phone"
                  type={"number"}
                  onChange={onChange}
                  value={state}
                />
                <button type="submit">Get OTP</button>
              </form>
            </div>
          </div>
        </div>
        <div className={css["image"]}>
          <div className={css["glass-box"]}>
            <button>🎁 Top Notch Stock Resources</button>

            <p>
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginWithMobile;

// axios({
//   method: "GET",
//   url: "http://localhost:5000/google",
// });
