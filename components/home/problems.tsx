import React from "react";
import Image from "next/image";
import style from "styles/home.module.scss";
import Button from "components/button";

const ProblemsAndSolutions = () => {
  const [expand, setExpand] = React.useState(false);

  return (
    <section className={`${style.awardsection} awardsection pt-50 pb-50`}>
      <div className="container">
        <h2 className="text_center heading2 text_skyblue">
          The problems every governemt job aspirant faces
        </h2>
        <div className="row mt-50">
          <div className="vts-6 even">
            <div className="boxdesign22">
              <div className="image">
                <Image
                  src="/svg/undraw_warning_re_eoyh.svg"
                  height={250}
                  width={250}
                  alt="undraw_warning_re_eoyh.svg"
                />
              </div>
              <div
                className="contentbox"
                style={{
                  border: ` 1px solid #333a49`,
                }}
              >
                <div className="heading">Problem 1</div>
                <p>
                  <b
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Irrelvant Questions In Test Series
                  </b>
                </p>
                <p
                  style={{
                    maxHeight: expand ? "56px" : "200px",
                    overflow: "hidden",
                    transition: "all 100ms ease-in",
                  }}
                >
                  We talked to many government job asipirants and ask them what
                  problems they are facing in other test platforms. Almost all
                  of them had mentioned the problem of Irrelavncy of questions
                  in test-series. Questions were either too difficult or too
                  easy, it made assessment of their preparation harder
                </p>
                <a
                  onClick={() => setExpand(!expand)}
                  style={{
                    color: "#3abff8",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {!expand ? "View Less △" : "View More ▽"}
                </a>
              </div>
            </div>
          </div>
          <div className="vts-6 odd">
            <div className="boxdesign22">
              <div className="contentbox">
                <div className="heading bg_skyblue">Our Solution</div>
                <p>
                  <b>Everone question is handpicked by Dedicated team</b>
                  Having first hand experience of this problems while
                  preparation of the government jobs. We understand the
                  importance of quality and relvancy of questions that&rsquo;s
                  we created a dedicated team just to solve this issue.
                </p>
                {/* <ul>
                  <li>
                    First Our team create original question based on frequently
                    asked questions in various examinatin
                  </li>
                  <li>
                    Then these questions are sorted based on relevancy and
                    importance by toppers of the respective exam
                  </li>
                  <li>
                    Afterthat it is sent to get reviewed by subject matter
                    experts.
                  </li>
                  <li>once review is complete , Test is prepared.</li>
                </ul> */}
              </div>
              <div className="image">
                <Image
                  src="/svg/undraw_warning_re_eoyh.svg"
                  height={250}
                  width={250}
                  alt="undraw_warning_re_eoyh.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.callbtn}>
          <Button theme="secondry">View More</Button>
        </div>
      </div>
    </section>
  );
};
export default ProblemsAndSolutions;

{
  /* <div className="vts-6 even">
            <div className="boxdesign22">
              <div className="image">
                <Image
                  src="/svg/undraw_warning_re_eoyh.svg"
                  height={250}
                  width={250}
                  alt="undraw_warning_re_eoyh.svg"
                />
              </div>
              <div className="contentbox">
                <div className="heading">The Problem</div>
                <p>
                  <b>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </b>
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
            </div>
          </div>
          <div className="vts-6 odd">
            <div className="boxdesign22">
              <div className="contentbox">
                <div className="heading bg_skyblue">Our Solution</div>
                <p>
                  <b>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </b>
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
              <div className="image">
                <Image
                  src="/svg/undraw_warning_re_eoyh.svg"
                  height={250}
                  width={250}
                  alt="undraw_warning_re_eoyh.svg"
                />
              </div>
            </div>
          </div> */
}
