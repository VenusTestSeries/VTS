import React from "react";
import _win from "constant/_win";
import usePhoneAuth from "_firebase/use-auth";

const PhoneAuthentication = () => {
  const { inputState, onChangeInput, onSubmitOTP, varifyOTP } = usePhoneAuth();
  return (
    <div style={style.container}>
      <form onSubmit={onSubmitOTP} style={style.form}>
        <input
          type="number"
          name="phone"
          placeholder="Enter your mobile number"
          value={inputState.phone}
          onChange={({ target }) => onChangeInput("phone", target.value)}
        />
        {inputState.show && (
          <React.Fragment>
            <input
              type="number"
              name="otp"
              placeholder="Enter your OTP"
              value={inputState.otp}
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
