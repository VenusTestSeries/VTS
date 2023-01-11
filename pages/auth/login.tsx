/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "styles/auth.module.scss";

type FormEvent = React.FormEvent<HTMLFormElement>;

const Login = () => {
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
              Venus Test Series
              <Link href={"/auth/sign-up"}>Sign Up</Link>
            </p>
          </div>
          <div className={css["message"]}>
            <h1>Welcome Back</h1>
            <p>Login into your account</p>
          </div>
          <div className={css["login-form"]}>
            <form onSubmit={onSubmit}>
              <input placeholder="Email" type={"text"} />
              <input placeholder="Password" type={"password"} />
              <button>Login</button>
            </form>
          </div>
        </div>
        <div className={css["image"]}></div>
      </div>
    </div>
  );
};
export default Login;