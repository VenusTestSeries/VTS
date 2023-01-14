import React from "react";
import Button from "components/button";
import GridItems from "components/onboarding/grid";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import AddCircleOutline from "lib/icons/AddCircleOutline";
import css from "styles/onboarding.module.scss";

const OnBoarding = () => {
  return (
    <div className={css["container"]}>
      <div>
        <div className={css["details"]}>
          <h1>Welcome To VTS</h1>
          <p>You are preparing for</p>
        </div>
        <div className={css["progrees"]}>
          <div className={css["loading"]}></div>
        </div>
        <GridItems
          items={Options}
          value={""}
          onSelect={(value) => console.log(value)}
        />
        <div className="mt-50 ">
          <Button theme="secondry">Continue</Button>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding;

OnBoarding.perpage = PerPageLayout;

const Options = [
  {
    title: "SSC",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "Railway",
    icon: <RailIcon fill="#fff" />,
  },
  {
    title: "Bank",
    icon: <BankIcon fill="#fff" />,
  },
  {
    title: "Defence",
    icon: <NurseIcon fill="#fff" />,
  },
  {
    title: "CA",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "Other",
    icon: <AddCircleOutline fill="#fff" />,
  },
];
