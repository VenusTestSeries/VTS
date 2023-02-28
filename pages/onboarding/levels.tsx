import React from "react";
import Image from "next/image";
// ICONS
import PerPageLayout from "layout/perpage";
import BankIcon from "lib/icons/BankIcon";
import GlobeIcon from "lib/icons/GlobeIcon";
import NurseIcon from "lib/icons/NurseIcon";
import RailIcon from "lib/icons/RailIcon";
import { useRouter } from "next/router";
import CircleProgress from "components/circle-progress";
import LineProgressComponent from "components/lineprogressbar";
import MappInLine from "lib/icons/MappInLine";
import LinkedinFill from "lib/icons/LinkedinFill";
import GithubFill from "lib/icons/GithubFill";
import GlobalLine from "lib/icons/GlobalLine";
import TagLine from "lib/icons/TagLine";
import Style from "../../styles/profile.module.scss";
import ArrowRight from "lib/icons/ArrowRight";

const OnBoarding3 = () => {
  const [selected, setSelected] = React.useState("Beginner");

  const { push } = useRouter();
  return (
    <section className="pt-50 pb-50">
      <div className="container">
        <div className="row">
          {/* <div className="userprifilebox"> */}
          <div className="profilesection vts-3">
            <div className="innerbox boxgrid">
              <div className={Style.profileside}>
                <div className={Style.image}>
                  <Image
                    src="/images/userimage.png"
                    height={80}
                    width={80}
                    alt="userimage"
                  />
                </div>
                <div className={Style.namebox}>
                  <div>
                    <div className={Style.textbase}>Ankit pandey</div>
                    <div className={Style.predu}>HackerOrWhat</div>
                  </div>
                  <div className={Style.rank}>
                    {" "}
                    Rank <b>65,856</b>
                  </div>
                </div>
              </div>

              <div className={Style.textblock}>
                <div
                  className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                >
                  Problem solver
                </div>
                <div className={Style.profilelist}>
                  <div className="mt-15 d-flex align_items_center gap-4">
                    <div className="icon line-height-0">
                      <MappInLine size={16} color="#b3c5ef" />
                    </div>
                    <div
                      className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                    >
                      India
                    </div>
                  </div>
                  <div className="mt-15 d-flex align_items_center gap-4">
                    <div className="icon line-height-0">
                      <MappInLine size={16} color="#b3c5ef" />
                    </div>
                    <div
                      className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                    >
                      Motilal Nehru national institute of tec
                    </div>
                  </div>
                  <div className="mt-15 d-flex align_items_center gap-4">
                    <div className="icon line-height-0">
                      <GlobalLine size={16} color="#b3c5ef" />
                    </div>
                    <div
                      className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                    >
                      https://ankit-portfolio-93hxe3wfv-skpan
                    </div>
                  </div>
                  <div className="mt-15 d-flex align_items_center gap-4">
                    <div className="icon line-height-0">
                      <GithubFill size={16} color="#b3c5ef" />
                    </div>
                    <div
                      className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                    >
                      RankerO
                    </div>
                  </div>
                  <div className="mt-15 d-flex align_items_center gap-4">
                    <div className="icon line-height-0">
                      <LinkedinFill size={16} color="#b3c5ef" />
                    </div>
                    <div
                      className={`${Style.text}  line-clamp-1 font_size14 font-w300 `}
                    >
                      ankit-pandey-0828bb199
                    </div>
                  </div>

                  <div className="d-flex gap-5 mt-15 align_items_start">
                    <div>
                      <div className="icon line-height-0">
                        <TagLine color="#b3c5ef" size={16} />{" "}
                      </div>
                    </div>{" "}
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
                    <div className={`${Style.mindtext} mb-10`}>
                      Solved Problems
                    </div>
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
                        <div className="mb-16">
                          <LineProgressComponent
                            percentage={10}
                            variant="success"
                          />
                        </div>

                        <div className="mb-16">
                          <LineProgressComponent
                            percentage={40}
                            variant="warning"
                          />
                        </div>
                        <div className="mb-16">
                          <LineProgressComponent
                            percentage={50}
                            variant="danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vts-6">
                  <div className="boxgrid width100">
                    <div className="d-flex justify-content-spacebetween">
                      <div className={`${Style.mindtext} mb-10`}>Badges</div>
                      <div className="icon">
                        <ArrowRight fill="#b3c5ef" size={22} />
                      </div>
                    </div>
                    <div className="d-flex align_items_center justfiy_content_center gap-20 mb-20 ">
                      <div className="items">
                        <Image
                          src="/images/dcc-2023-1.png"
                          height={56}
                          width={56}
                          alt="dcc"
                        />
                      </div>
                      <div className="items">
                        <Image
                          src="/images/2022-annual-100.png"
                          height={72}
                          width={72}
                          alt="dcc"
                        />
                      </div>
                      <div className="items">
                        <Image
                          src="/images/dcc-2022-12.png"
                          height={56}
                          width={56}
                          alt="dcc"
                        />
                      </div>
                    </div>
                    <div className={`${Style.mindtext}  `}>
                      Most Recent Badge
                    </div>
                    <div>100 Days Badge 2022</div>
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
          {/* <div className={css["qutbox"]}>
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
          </div> */}

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
