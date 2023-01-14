import React from "react";
import Button from "components/button";
import GridItems from "components/onboarding/grid";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import css from "styles/onboarding.module.scss";
import { useRouter } from "next/router";

const BoardingPage = () => {
  const { push } = useRouter();

  return (
    <div className={css["container"]}>
      <div>
        <div className={css["details"]}>
          <h1 className="text_center">Welcome To SSC</h1>
          <p className="text_center">You are preparing for</p>
        </div>
        <div className={css["progreescount"]}>1/7</div>
        <div className={css["progrees"]}>
          <div className={css["loading"]}></div>
        </div>
        <GridItems
          items={Options}
          value={""}
          onSelect={(value) => console.log(value)}
        />
        <div className="mt-50 ">
          <Button theme="secondry" onClick={() => push("/onboarding/tier")}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BoardingPage;

BoardingPage.perpage = PerPageLayout;

const Options = [
  {
    title: "CGL",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "CHSL",
    icon: <RailIcon fill="#fff" />,
  },
  {
    title: "MTS ",
    icon: <BankIcon fill="#fff" />,
  },
  {
    title: "CPO ",
    icon: <NurseIcon fill="#fff" />,
  },
  {
    title: "Other",
    icon: <GlobeIcon fill="#fff" />,
  },
];
