import React from "react";
import Button from "components/button";
import GridItems from "components/onboarding/grid";
// ICONS
import PerPageLayout from "layout/perpage";

import css from "styles/onboarding.module.scss";
import { useRouter } from "next/router";
import Options from "constant/index";

const OnBoarding = () => {
  const router = useRouter();

  const [selected, setSelected] = React.useState("SSC");

  return (
    <div className={css["container"]}>
      <div>
        <div className={css["details"]}>
          <h1 className="text_center">Welcome To VTS</h1>
          <p className="text_center">You are preparing for</p>
        </div>
        <div className={css["progreescount"]}>0/7</div>
        <div className={css["progrees"]}>
          <div className={css["loading"]}></div>
        </div>
        <GridItems
          items={Options}
          value={selected}
          onSelect={(value) => setSelected(value)}
        />
        <div className="mt-50 ">
          <Button
            theme="secondry"
            onClick={() => router.push(`/onboarding/${selected.toLowerCase()}`)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding;

OnBoarding.perpage = PerPageLayout;
