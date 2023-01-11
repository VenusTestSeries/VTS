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
              Don’t have an account?<Link href={"/auth/sign-up"}>Sign Up</Link>
            </p>
          </div>
          <div className={css["message"]}>
            <h1>Welcome Back</h1>
            <p>Login into your account</p>
          </div>

          <div className={css["social"]}>
            <div className={css["icons"]}>
              <Link href={"/"} className={css["item"]}>
                <img src="/svg/google.svg" alt="google" />
                <p>Google</p>
              </Link>
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
              <input placeholder="Email" type={"text"} />
              <input placeholder="Password" type={"password"} />
              <div className={css["forget-password"]}>
                <div className={css["checkbox"]}>
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className={css["link"]}>
                  <Link href="/auth/forget-password">Forget Password</Link>
                </div>
              </div>
              <button>Login</button>
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
export default Login;
