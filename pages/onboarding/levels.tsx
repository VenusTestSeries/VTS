import React from "react";
import Button from "components/button";
import Link from "next/link";
import Image from "next/image";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import css from "styles/onboarding.module.scss";
import { useRouter } from "next/router";
import CircleProgress from "components/circle-progress";
import LineProgress from "components/lineprogressbar";
import MappInLine from "lib/icons/MappInLine";
import LinkedinFill from "lib/icons/LinkedinFill";
import GithubFill from "lib/icons/GithubFill";
import GlobalLine from "lib/icons/GlobalLine";
import Student from "lib/icons/Student";
import TagLine from "lib/icons/TagLine";

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
    <section className="pt-50 pb-50">
      <div className="container">
        <div className="row">
          {/* <div className="userprifilebox"> */}
          <div className="profilesection vts-3">
            <div className="innerbox boxgrid">
              <div className="profileside">
                <div className="image">
                  <Image
                    src="/images/userimage.png"
                    height={80}
                    width={80}
                    alt="userimage"
                  />
                </div>
                <div className="namebox">
                  <div className="text-base">Ankit pandey</div>
                  <div className="predu">HackerOrWhat</div>
                  <div style={{ marginTop: "20px" }}>
                    Rank <b>65,856</b>
                  </div>
                </div>
              </div>

              <div className="textblock">
                <div>Problem solver</div>
                <div className="">
                  <p className="mt-15">
                    <MappInLine size={16} color="#8492a6" />
                    India
                  </p>
                  <p className="mt-15">
                    <MappInLine size={16} color="#8492a6" />
                    Motilal Nehru national institute of tec
                  </p>
                  <p className="mt-15">
                    <GlobalLine size={16} color="#8492a6" />
                    https://ankit-portfolio-93hxe3wfv-skpan
                  </p>
                  <p className="mt-15">
                    <GithubFill size={16} color="#8492a6" />
                    RankerO
                  </p>
                  <p className="mt-15">
                    <LinkedinFill size={16} color="#8492a6" />
                    ankit-pandey-0828bb199
                  </p>

                  <div className="d-flex gap-5 mt-15 align_items_start">
                    <p>
                      <TagLine color="#8492a6" size={16} />{" "}
                    </p>{" "}
                    <ul className="tags">
                      <li>c++</li>
                      <li>algorithm</li>
                      <li>data-structue</li>
                      <li>sql</li>
                      <li>mongodb</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contentsection vts-9">
            <div className="body">
              <div className="row">
                <div className="vts-6">
                  <div className="boxgrid width100">
                    <div>Solved Problems</div>
                    <div className="rogressbarbox">
                      <div className="roundprogressbar">
                        <CircleProgress
                          percentage={50}
                          background={"#000"}
                          foreground={"#fff"}
                          strokeWidth={"5"}
                          size={"100"}
                        ></CircleProgress>
                      </div>
                      <div className="LineProgress">
                        <div>
                          <LineProgress
                            percentage={0}
                            background={"grey"}
                            activeColor={""}
                          />
                        </div>
                        <div>
                          <LineProgress
                            percentage={0}
                            background={"grey"}
                            activeColor={""}
                          />
                        </div>
                        <div>
                          <LineProgress
                            percentage={0}
                            background={"grey"}
                            activeColor={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vts-6">
                  <div className="boxgrid width100">
                    <div>Badges</div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row"></div>
      </div>
      <div className="container">
        <div>
          <div className={css["qutbox"]}>
            <div className={css["heading"]}>
              {levelData.map((item, index) => (
                <h4 key={index} onClick={() => setSelected(item.name)}>
                  {item.name}
                </h4>
              ))}
            </div>
            <div className={css["subheading"]}>
              Become an inspector in Customs, Income tax, CBI
            </div>
            <div className={css["innsubheading"]}>Earn 45000 to 1,00,000</div>

            <div className={css.testfreemocks}>
              {Array.from({ length: 4 }).map((item, index) => (
                <div className={css.list} key={index}>
                  <Link href="/series/ssc">
                    <div className={css.qtname}>SSC CGL Tier 1 Mock Test 1</div>
                    <div className={css.dateep}>Expires on 31 Jan 2023</div>
                    <div className={css.content}>
                      <ul>
                        <li>
                          <span>Questions</span>
                          <span>100</span>
                        </li>
                        <li>
                          <span>Max Marks</span>
                          <span>200</span>
                        </li>
                        <li>
                          <span>Time</span>
                          <span>60 Mins</span>
                        </li>
                      </ul>
                    </div>
                    <div className={css.maplink}>Attempt →</div>
                  </Link>
                </div>
              ))}
            </div>
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
    title: "Other",
    icon: <GlobeIcon fill="#fff" />,
  },
];
