/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "styles/auth.module.scss";
import SocialLogin from "components/social-login";

type FormEvent = React.FormEvent<HTMLFormElement>;

const SignUp = () => {
  const onSubmit = React.useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

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
              have an account?<Link href={"/auth/login"}>Sign in!</Link>
            </p>
          </div>
          <div className={css["message"]}>
            <h1>Get Started With Venis</h1>
            <p>Getting started is easy</p>
          </div>

          <SocialLogin />

          <div className={css["line"]}>
            <p>Or continue with</p>
          </div>
          <div className={css["login-form"]}>
            <form onSubmit={onSubmit}>
              <input placeholder="Full Name" type={"text"} />
              <input placeholder="Enter Email" type={"text"} />
              <input placeholder="Password" type={"password"} />
              <input placeholder="Confirm Password" type={"password"} />
              <button type="submit">Create Account</button>
            </form>
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
export default SignUp;
