import _win from "constant/_win";
import { Auth, RecaptchaVerifier } from "firebase/auth";


const generateRecaptcha = (authentication: Auth) => {
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


export default generateRecaptcha