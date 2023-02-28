import React from "react";
import styles from "styles/analysis.module.scss";
import Image from "next/image";
import StarIcon from "lib/icons/star";
import Link from "next/link";
import Button from "components/button";
import Medal2Line from "lib/icons/Medal2Line";
import Trophy from "lib/icons/Trophy";
import NewspaperLine from "lib/icons/NewspaperLine";
import FocusLine from "lib/icons/FocusLine";
import TeamLine from "lib/icons/TeamLine";

const Analysis = () => {
  return (
    <div>
      <div
        className={`${styles.header} d-flex justify-content-spacebetween pl-15 pr-15 bgwhite pt-10 pb-10 `}
      >
        <div className="left d-flex align_items_center  gap-15">
          <div className="logo">
            <Image src="/svg/1_Logo-4.svg" width={240} height={40} alt="logo" />
          </div>
          <div>PYST 1: SSC CHSL - English (Held On: 24 May 2022 Shift 3)</div>
        </div>

        <div className="right d-flex align_items_center gap-15">
          <div className="inline-feedback">
            <div className="inline-feedbacktext">Rate the Test</div>
            <ul>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
            </ul>
          </div>
          <div>
            <Link href="#">Go to Tests</Link>
          </div>
          Or
          <div className="">
            <Button>Solutions</Button>
          </div>
        </div>
      </div>

      <section className={`${styles.bg3} bgcolor3`}>
        <div className="container pt-48">
          <div className="row     justify-content-center">
            <div className="vts-10 ">
              <h4 className="mb-16">Overall Performance Summary</h4>
              <div
                className={`${styles.analysisbox} mb-48 justify-content-between d-flex`}
              >
                <div className={`${styles.container} ancontainer d-flex`}>
                  <div
                    className={`${styles.icon} ${styles.bgcolor_an1} icon  `}
                  >
                    <Medal2Line />
                  </div>
                  <div className={`${styles.content} content `}>
                    <h4 className={styles.binding}>
                      67202 <span>/ 69506</span>
                    </h4>
                    <div className={styles.help}>Rank</div>
                  </div>
                </div>
                <div className={`${styles.container} ancontainer d-flex`}>
                  <div className={`${styles.icon} ${styles.bgcolor_an2} icon`}>
                    <Trophy />
                  </div>
                  <div className={`${styles.content} content `}>
                    <h4 className={styles.binding}>
                      0 <span>/ 50</span>
                    </h4>
                    <div className={styles.help}>Score</div>
                  </div>
                </div>
                <div className={`${styles.container} ancontainer d-flex`}>
                  <div className={`${styles.icon} ${styles.bgcolor_an3} icon`}>
                    <NewspaperLine />
                  </div>
                  <div className={`${styles.content} content `}>
                    <h4 className={styles.binding}>
                      0 <span>/ 25</span>
                    </h4>
                    <div className={styles.help}>Attempted</div>
                  </div>
                </div>
                <div className={`${styles.container} ancontainer d-flex`}>
                  <div className={`${styles.icon} ${styles.bgcolor_an4} icon`}>
                    <FocusLine />
                  </div>
                  <div className={`${styles.content} content `}>
                    <h4 className={styles.binding}>
                      0 <span>/ %</span>
                    </h4>
                    <div className={styles.help}>Accuracy</div>
                  </div>
                </div>
                <div className={`${styles.container} ancontainer d-flex`}>
                  <div className={`${styles.icon} ${styles.bgcolor_an5} icon`}>
                    <TeamLine />
                  </div>
                  <div className={`${styles.content} content `}>
                    <h4 className={styles.binding}>
                      3.32 <span>/ 0%</span>
                    </h4>
                    <div className={styles.help}>Percentile</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vts-10">
              <h4 className="mb-16">Sectional Summary</h4>

              <div className={`${styles.sectional}`}>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div className="font_sm">Section Name</div>
                        </th>
                        <th>
                          <div className="font_sm">Score</div>
                        </th>
                        <th>
                          <div className="font_sm">Attempted</div>{" "}
                        </th>
                        <th>
                          <div className="font_sm">Accuracy</div>{" "}
                        </th>
                        <th>
                          <div className="font_sm">Time</div>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Test</td>
                        <td>
                          <div className="pros">
                            <div className="bar"></div>
                          </div>
                          0 / 50
                        </td>
                        <td>0 / 25</td>
                        <td>0%</td>
                        <td>3.32%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
