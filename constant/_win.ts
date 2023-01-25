

type __Win = {
    recaptchaVerifier: any;
    confirmationResult: any;
    [k: string]: any
} & typeof window;

/**
 * SSR Window
 * @returns 
 */

const _win = () => {
    if (typeof window !== "undefined") {
        return window as __Win;
    }
};

export default _win