/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "styles/auth.module.scss";
import axios from "axios";
import usePhoneAuth from "_firebase/use-auth";
import SocialLogin from "components/social-login";

type FormEvent = React.FormEvent<HTMLFormElement>;

const LoginWithMobile = () => {
  const AuthWithGoogle = () => {
    try {
      window.open("http://localhost:5000/auth/google", "_self");
    } catch (error) {
      console.log(error);
    }
  };
  const { inputState, onChangeInput, onSubmitOTP, varifyOTP } = usePhoneAuth();

  return (
    <React.Fragment>
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
              <SocialLogin />
              <div className={css["line"]}>
                <p>Or continue with</p>
              </div>
              <div className={css["login-form"]}>
                <form onSubmit={onSubmitOTP}>
                  <input
                    name="phone"
                    autoComplete="off"
                    placeholder="eg +91 Login with Phone"
                    type={"number"}
                    onChange={({ target }) =>
                      onChangeInput("phone", target.value)
                    }
                    value={inputState.phone}
                  />
                  {inputState.show ? (
                    <React.Fragment>
                      <input
                        name="otp"
                        autoComplete="off"
                        placeholder="enter 6 digit otp"
                        type={"otp"}
                        onChange={({ target }) =>
                          onChangeInput("otp", target.value)
                        }
                        value={inputState.otp}
                      />
                      <button type="button" onClick={varifyOTP}>
                        Authenticated
                      </button>
                    </React.Fragment>
                  ) : (
                    <button type="submit">
                      {inputState.loadingOtp ? "Sending..." : "Get OTP"}
                    </button>
                  )}
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
      <div id="sign-in-button" className="sign-in-button"></div>
    </React.Fragment>
  );
};
export default LoginWithMobile;

// axios({
//   method: "GET",
//   url: "http://localhost:5000/google",
// });
