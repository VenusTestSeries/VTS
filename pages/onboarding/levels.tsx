import React from "react";
import Button from "components/button";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import css from "styles/onboarding.module.scss";
import { useRouter } from "next/router";

const OnBoarding3 = () => {
  const [selected, setSelected] = React.useState("Beginner");
  const levelData = [
    {
      name: "Beginner",
    },
    {
      name: "Real Test",
    },
    {
      name: "Difficult",
    },
  ];

  const RenderList = React.useMemo(() => {
    switch (selected) {
      case "Beginner":
        return Array.from(Array(5).keys());
      case "Real Test":
        return Array.from(Array(8).keys());
      case "Difficult":
        return Array.from(Array(13).keys());
      default:
        return [];
    }
  }, [selected]);

  const { push } = useRouter();
  return (
    <section className="bg_primary pt-50 pb-50">
      <div className="container">
        <div>
          <div className={css["qutbox"]}>
            <div className={css["heading"]}>
              {levelData.map((item, index) => (
                <h4 key={index} onClick={() => setSelected(item.name)}>
                  {item.name}
                </h4>
              ))}
              {/* <a href="#">VIEW MORE</a> */}
            </div>
            <div className={css["subheading"]}>
              Become an inspector in Customs, Income tax, CBI
            </div>
            <div className={css["innsubheading"]}>Earn 45000 to 1,00,000</div>
            <ul className={css["list"]}>
              {RenderList.map((_, i) => {
                return (
                  <li key={i}>
                    <div
                      className={css["pass"]}
                      onClick={() => push(`/series/test-${i}`)}
                    >
                      Tier-{i}{" "}
                    </div>
                    Preliminary
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <div className="mt-50 ">
            <Button theme="secondry">Continue</Button>
          </div> */}
        </div>
      </div>
    </section>
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
