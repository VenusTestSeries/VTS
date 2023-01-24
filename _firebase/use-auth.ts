import React from "react";
import authentication from "_firebase/config";
import {
    signInWithPhoneNumber,
    PhoneAuthProvider,
} from "firebase/auth";
import _win from "constant/_win";
import generateRecaptcha from "_firebase/recaptcha";

const usePhoneAuth = () => {

    const [inputState, setInputState] = React.useState({
        otp: "",
        phone: "",
        show: false,
        loadingOtp: false,
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
            setInputState({
                ...inputState,
                show: true,
                loadingOtp: true,
            });
            if (__win) {
                generateRecaptcha(authentication);
                const appVerifier = __win.recaptchaVerifier;
                signInWithPhoneNumber(authentication, indianPhone, appVerifier)
                    .then((confirmationResult) => {
                        // console.log(confirmationResult);
                        __win.confirmationResult = confirmationResult;
                        setInputState({
                            ...inputState,
                            show: true,
                            loadingOtp: false,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
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
                        const credential = PhoneAuthProvider.credential(
                            confirmationResult.verificationId,
                            inputState.otp
                        );
                        console.log({ user });
                        alert(JSON.stringify(user, null, 2))
                        console.log({ credential });
                        // await signInWithCredential(authentication, credential);
                    })
                    .catch((error: any) => {
                        console.log(error);
                        // User couldn't sign in (bad verification code?)
                    });
            }
        }
    }, [inputState.otp]);


    return {
        inputState,
        varifyOTP,
        onSubmitOTP,
        onChangeInput,
    }
}
export default usePhoneAuth;


  // grecaptcha.reset(window.recaptchaWidgetId);
                        // // Or, if you haven't stored the widget ID:
                        // window.recaptchaVerifier.render().then(function (widgetId) {
                        //   grecaptcha.reset(widgetId);
                        // });