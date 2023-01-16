import React from "react";
import Button from "components/button";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import css from "styles/onboarding.module.scss";

const OnBoarding3 = () => {
  return (
    <div className={css["container"]}>
      <div>
        <div className={css["qutbox"]}>
          <div className={css["heading"]}>
            <h4>SSC CGl </h4>

            <a href="#">VIEW MORE</a>
          </div>
          <div className={css["subheading"]}>
            Become an inspector in Customs, Income tax, CBI
          </div>
          <div className={css["innsubheading"]}>Earn 45000 to 1,00,000</div>

          <ul className={css["list"]}>
            {Array.from(Array(40).keys()).map((_, i) => {
              return (
                <li key={i}>
                  <div className={css["pass"]}>Tier-{i} </div>
                  Preliminary
                </li>
              );
            })}
          </ul>
        </div>

        <div className={css["qutbox"]}>
          <div className={css["heading"]}>
            <h4>SSC CGl </h4>

            <a href="#">VIEW MORE</a>
          </div>
          <div className={css["subheading"]}>
            Become an inspector in Customs, Income tax, CBI
          </div>
          <div className={css["innsubheading"]}>Earn 45000 to 1,00,000</div>

          <ul className={css["list"]}>
            <li>
              <div className={css["pass"]}>Tier-1 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-2 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-3</div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-3 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-4 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-5 </div>
              Preliminary
            </li>
          </ul>
        </div>

        <div className={css["qutbox"]}>
          <div className={css["heading"]}>
            <h4>SSC CGl </h4>

            <a href="#">VIEW MORE</a>
          </div>
          <div className={css["subheading"]}>
            Become an inspector in Customs, Income tax, CBI
          </div>
          <div className={css["innsubheading"]}>Earn 45000 to 1,00,000</div>

          <ul className={css["list"]}>
            <li>
              <div className={css["pass"]}>Tier-1 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-2 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-3</div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-3 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-4 </div>
              Preliminary
            </li>
            <li>
              <div className={css["pass"]}>Tier-5 </div>
              Preliminary
            </li>
          </ul>
        </div>

        <div className="mt-50 ">
          <Button theme="secondry">Continue</Button>
        </div>
      </div>
    </div>
  );
};
export default OnBoarding3;

OnBoarding3.perpage = PerPageLayout;

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
    title: "   Other",
    icon: <GlobeIcon fill="#fff" />,
  },
];
