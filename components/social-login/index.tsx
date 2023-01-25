/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import css from "styles/auth.module.scss";

const SocialLogin = () => {
  return (
    <div className={css["social"]}>
      <div className={css["icons"]}>
        <Link href={"/api/auth/google"} className={css["item"]}>
          <img src="/svg/google.svg" alt="google" />
          <p>Google</p>
        </Link>
        <Link href={"/api/auth/facebook"} className={css["item"]}>
          <img src="/svg/facebook.svg" alt="google" />
          <p>Facebook</p>
        </Link>
      </div>
    </div>
  );
};
export default SocialLogin;
