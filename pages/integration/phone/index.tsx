import React from "react";
import authentication from "firebase/config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
} from "firebase/auth";

type __Win = {
  recaptchaVerifier: any;
  confirmationResult: any;
} & typeof window;
const _win = () => {
  if (typeof window !== "undefined") {
    return window as __Win;
  }
};

const generateRecaptcha = () => {
  const __win = _win();
  if (__win) {
    __win.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log(response);
        },
      },
      authentication
    );
  }
};

const PhoneAuthentication = () => {
  const [inputState, setInputState] = React.useState({
    phone: "",
    otp: "",
    show: false,
  });

  const onChangeInput = React.useCallback(
    (key: string, value: string) => {
      setInputState({
        ...inputState,
        [key]: value,
      });
    },
    [inputState]
  );

  const onSubmitOTP = React.useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const __win = _win();
      const indianPhone = `+91${inputState.phone}`;

      if (__win) {
        generateRecaptcha();
        const appVerifier = __win.recaptchaVerifier;
        signInWithPhoneNumber(authentication, indianPhone, appVerifier)
          .then((confirmationResult) => {
            // console.log(confirmationResult);
            __win.confirmationResult = confirmationResult;
            setInputState({
              ...inputState,
              show: true,
            });
          })
          .catch((error) => {
            console.log(error);
            // grecaptcha.reset(window.recaptchaWidgetId);
            // // Or, if you haven't stored the widget ID:
            // window.recaptchaVerifier.render().then(function (widgetId) {
            //   grecaptcha.reset(widgetId);
            // });
          });
      }
    },
    [inputState]
  );

  const varifyOTP = React.useCallback(() => {
    const __win = _win();
    if (__win) {
      if (inputState.otp.length >= 6) {
        const confirmationResult = __win.confirmationResult;
        confirmationResult
          .confirm(inputState.otp)
          .then(async (result: { user: any }) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            const credential = PhoneAuthProvider.credential(
              confirmationResult.verificationId,
              inputState.otp
            );
            console.log({ credential });
            await signInWithCredential(authentication, credential);
          })
          .catch((error: any) => {
            console.log(error);
            // User couldn't sign in (bad verification code?)
          });
      }
    }
  }, [inputState.otp]);
  return (
    <div style={style.container}>
      <form onSubmit={onSubmitOTP} style={style.form}>
        <input
          type="number"
          name="phone"
          placeholder="Enter your mobile number"
          onChange={({ target }) => onChangeInput("phone", target.value)}
        />

        {inputState.show && (
          <React.Fragment>
            <input
              type="number"
              name="otp"
              placeholder="Enter your OTP"
              onChange={({ target }) => onChangeInput("otp", target.value)}
            />
            <button onClick={varifyOTP} type="button">
              Varify OTP
            </button>
          </React.Fragment>
        )}
        {!inputState.show && <button type="submit">Get OTP</button>}
      </form>
      <div className="sign-in-button" id="sign-in-button"></div>
    </div>
  );
};
export default PhoneAuthentication;

type CSS = React.CSSProperties;

const style = {
  container: {
    display: "grid",
    placeContent: "center",
    height: "100vh",
  } as CSS,
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  } as CSS,
};
