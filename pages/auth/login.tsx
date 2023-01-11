/* eslint-disable @next/next/no-img-element */
import React from "react";
import Input from "components/inputs";
import css from "styles/auth.module.scss";
import Button from "components/button";
import Link from "next/link";

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
          <form onSubmit={onSubmit} className={css["login-form"]}>
            <Input label="Email or Username" type={"text"} />
            <Input label="Password" type={"password"} />
            <Button>Login</Button>
          </form>
        </div>
        <div className={css["image"]}></div>
      </div>
    </div>
  );
};
export default Login;
