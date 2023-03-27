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
import { useRouter } from "next/router";

const Analysis = () => {
  const router = useRouter();

  const __id = router?.query?.slug as string;

  const onSubmitTest = () => {
    router.push(`/series/ssc/${router?.query?.slug}/solutions`);
  };

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
            <Button onClick={onSubmitTest}>Solutions</Button>
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

            <div className="vts-10 mb-48">
              <h4 className="mb-16">Sectional Summary</h4>

              <div className={`${styles.sectional}`}>
                <div className={styles.tabledesign}>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div className="font_sm text_left">Section Name</div>
                        </th>
                        <th>
                          <div className="font_sm text_left">Score</div>
                        </th>
                        <th>
                          <div className="font_sm text_left">Attempted</div>{" "}
                        </th>
                        <th>
                          <div className="font_sm text_left">Accuracy</div>{" "}
                        </th>
                        <th>
                          <div className="font_sm text_left">Time</div>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Test</td>
                        <td>
                          <div className={styles.pros}>
                            <div
                              className={`${styles.bar} ${styles.bgcolor_an2} width-0`}
                            ></div>
                          </div>
                          <h4 className={styles.binding}>
                            3.32 <span>/ 0%</span>
                          </h4>
                        </td>
                        <td>
                          <div className={styles.pros}>
                            <div
                              className={`${styles.bar} ${styles.bgcolor_an3} width-10`}
                            ></div>
                          </div>
                          <h4 className={styles.binding}>
                            0 <span>/ 25</span>
                          </h4>
                        </td>
                        <td>
                          <div className={styles.pros}>
                            <div
                              className={`${styles.bar} ${styles.bgcolor_an4} width-20`}
                            ></div>
                          </div>
                          <h4 className={styles.binding}>
                            0 <span>/%</span>
                          </h4>
                        </td>
                        <td>
                          <div className={styles.pros}>
                            <div
                              className={`${styles.bar} ${styles.bgcolor_an5} width-30`}
                            ></div>
                          </div>
                          <h4 className={styles.binding}>
                            3.32<span>/%</span>
                          </h4>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="vts-10">
              <div className="row">
                <div className="vts-9">
                  <div className="row">
                    <div className="vts-12 mb-48">
                      <h4 className="mb-16">Compare with topper</h4>

                      <div className={`${styles.sectional}`}>
                        <div className={styles.tabledesign}>
                          <table>
                            <thead>
                              <tr>
                                <th>
                                  <div className="font_sm text_left">
                                    Section Name
                                  </div>
                                </th>
                                <th>
                                  <div className="font_sm text_left">Score</div>
                                </th>
                                <th>
                                  <div className="font_sm text_left">
                                    Attempted
                                  </div>{" "}
                                </th>
                                <th>
                                  <div className="font_sm text_left">
                                    Accuracy
                                  </div>{" "}
                                </th>
                                <th>
                                  <div className="font_sm text_left">Time</div>{" "}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Test</td>
                                <td>
                                  <div className={styles.pros}>
                                    <div
                                      className={`${styles.bar} ${styles.bgcolor_an2} width-0`}
                                    ></div>
                                  </div>
                                  <h4 className={styles.binding}>
                                    3.32 <span>/ 0%</span>
                                  </h4>
                                </td>
                                <td>
                                  <div className={styles.pros}>
                                    <div
                                      className={`${styles.bar} ${styles.bgcolor_an3} width-10`}
                                    ></div>
                                  </div>
                                  <h4 className={styles.binding}>
                                    0 <span>/ 25</span>
                                  </h4>
                                </td>
                                <td>
                                  <div className={styles.pros}>
                                    <div
                                      className={`${styles.bar} ${styles.bgcolor_an4} width-20`}
                                    ></div>
                                  </div>
                                  <h4 className={styles.binding}>
                                    0 <span>/%</span>
                                  </h4>
                                </td>
                                <td>
                                  <div className={styles.pros}>
                                    <div
                                      className={`${styles.bar} ${styles.bgcolor_an5} width-30`}
                                    ></div>
                                  </div>
                                  <h4 className={styles.binding}>
                                    3.32<span>/%</span>
                                  </h4>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vts-3">
                  <div className="row">
                    <div className="vts-12 mb-48">
                      <h4 className="mb-16">Top Rankers</h4>

                      <div className={styles.toprank}>
                        <ul className={styles.topname}>
                          <li>
                            <div className="font_size15">1</div>
                            <div className={styles.topimage}>
                              <Image
                                src="/images/userimage.png"
                                alt={""}
                                width={40}
                                height={40}
                              ></Image>
                            </div>
                            <div>
                              <div className="font_size15">Rakesh Sinha</div>
                              <div className={styles.help}>50/50</div>
                            </div>
                          </li>
                          <li>
                            <div className="font_size15">1</div>
                            <div className={styles.topimage}>
                              <Image
                                src="/images/userimage.png"
                                alt={""}
                                width={40}
                                height={40}
                              ></Image>
                            </div>
                            <div>
                              <div className="font_size15">Rakesh Sinha</div>
                              <div className={styles.help}>50/50</div>
                            </div>
                          </li>
                          <li>
                            <div className="font_size15">1</div>
                            <div className={styles.topimage}>
                              <Image
                                src="/images/userimage.png"
                                alt={""}
                                width={40}
                                height={40}
                              ></Image>
                            </div>
                            <div>
                              <div className="font_size15">Rakesh Sinha</div>
                              <div className={styles.help}>50/50</div>
                            </div>
                          </li>
                          <li>
                            <div className="font_size15">1</div>
                            <div className={styles.topimage}>
                              <Image
                                src="/images/userimage.png"
                                alt={""}
                                width={40}
                                height={40}
                              ></Image>
                            </div>
                            <div>
                              <div className="font_size15">Rakesh Sinha</div>
                              <div className={styles.help}>50/50</div>
                            </div>
                          </li>
                          <li>
                            <div className="font_size15">1</div>
                            <div className={styles.topimage}>
                              <Image
                                src="/images/userimage.png"
                                alt={""}
                                width={40}
                                height={40}
                              ></Image>
                            </div>
                            <div>
                              <div className="font_size15">Rakesh Sinha</div>
                              <div className={styles.help}>50/50</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
