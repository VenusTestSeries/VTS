import React from "react";
import Link from "next/link";
import ArrowLeft from "lib/icons/ArrowLeft";
import StarIcon from "lib/icons/star";
import FilterFill from "lib/icons/FilterFill";
import User2 from "lib/icons/User2";
import Button from "components/button";
import EmotionUnhappy from "lib/icons/EmotionUnhappy";
import Save from "lib/icons/Save";
import Report from "lib/icons/Report";
// import seriesData from "constant/dummy";
import { QuestionTypes } from "constant/types";
import ChevronBack from "lib/icons/ChevronBack";
// import useSWR from "swr";
import { GetServerSidePropsContext } from "next";
import useCountdown from "hooks/use-coutdown";
import useInterval from "hooks/use-interval";
import timeFormat from "constant/time-format";

interface TestSeriesProps {
  data: {
    questions: QuestionTypes[];
  }[];
}

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
/**
 * Test Series Interface
 * @returns
 */

const TestSeries = ({ data: seriesArray }: TestSeriesProps) => {
  const series = seriesArray[4];

  const [toggleSection, setToggleSection] = React.useState(false);
  const onToggleSection = React.useCallback(() => {
    setToggleSection(!toggleSection);
  }, [toggleSection]);

  const [language, setLanguage] = React.useState("english");

  const [selected, setSelected] = React.useState(
    series.questions[0] as QuestionTypes
  );

  // FOR NEXT BUTTON
  const onNext = () => {
    const findIndex = series.questions.findIndex(
      (value) => value._id === selected._id
    );
    const data =
      findIndex < series.questions.length - 1
        ? series.questions[findIndex + 1]
        : series.questions[0];
    setSelected(data);
  };
  const onPrevious = () => {
    const findIndex = series.questions.findIndex(
      (value) => value._id === selected._id
    );
    const data =
      findIndex > 0 ? series.questions[findIndex - 1] : series.questions[0];
    setSelected(data);
  };

  const dataWithMultilanguage = React.useMemo(() => {
    // @ts-ignore
    return selected[language] as QuestionTypes["english"];
  }, [language, selected]);

  // COUNT DOWN
  const [count, setCount] = React.useState(30);
  useInterval(
    () => {
      if (count <= 0) {
        alert("Time Up");
        setCount(0);
      } else {
        setCount((i) => i - 1);
      }
    },
    count === 0 ? null : 1000
  );

  return (
    <div className="seriepage">
      <div className="header">
        <div className="leftbox">
          <ul>
            <li className="icon">
              <Link href="#">
                <ArrowLeft color="#fff" />
              </Link>
            </li>
            <li className="text">
              <div className="text1">Tests</div>
              <div className="text2">
                PYST 1: SSC CGL - General Awareness (Held On : 20 April 2022
                Shift 2)
              </div>
            </li>
          </ul>
        </div>
        <div className="rightbox">
          <div className="box">
            <div className="timer">{timeFormat(count)}</div>
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
            <div className="analy">
              <Link href="#">ANALYTICS</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="seriebox">
        <div
          className="leftsection"
          // style={{
          //   marginLeft: toggleSection ? "300px" : "0px",
          // }}
        >
          <div className="actual_exam_ui_top">
            <div className="left">
              <div className="text">Sections</div>
              <div className="button">
                <Link href="#">Test</Link>
              </div>
            </div>
            <div className="right">
              <div>View in</div>
              <div className="dropdown">
                <select
                  defaultValue={language}
                  onChange={({ target }) => setLanguage(target.value)}
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mainbox">
            <div className="mainboxtop">
              <div className="left">
                <div className="tp-ques-number">Question No. 1</div>
                <span className="currentQuestion badge bg_red">Incorrect</span>
                <div className="outtimging font_size_small">
                  <div style={{ lineHeight: "0px" }}>
                    <EmotionUnhappy width={14} color="#c0392b" />
                  </div>{" "}
                  You <span>00:38</span>
                  <div className="outtimging font_size_small">
                    Avg: <span>00:21</span>{" "}
                  </div>
                  <div className="marking">
                    Marks<span className=" badge bg_red">-0.5</span>{" "}
                  </div>
                  <span className="badge bg_green">27% answered correctly</span>
                </div>
              </div>
              <div className="right">
                <div className="save">
                  <Link href="#">
                    <Save width={12} />
                    Save
                  </Link>
                </div>
                <div className="Report">
                  <Link href="#">
                    {" "}
                    <Report width={12} />
                    Report
                  </Link>
                </div>
              </div>
            </div>
            <div className="detailed_question">
              <div className="que_ans_box">
                <div className="que_box">{dataWithMultilanguage.question}</div>
                <ul className="que_option">
                  {dataWithMultilanguage.options.map((item, index) => {
                    return (
                      <li key={index}>
                        <label htmlFor="1">
                          <input id="1" type="radio" name="light" />
                          <div className="qtytext"> {item.value}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="detailed_questionfooter">
              <Button onClick={onPrevious}>Previous </Button>
              <Button onClick={onNext}>Next</Button>
            </div>
          </div>
        </div>

        <div
          className="rightsection"
          // style={{
          //   width: toggleSection ? "300px" : "0px",
          // }}
        >
          <div className="toogle-section">
            <span onClick={onToggleSection}>
              <ChevronBack size={18} />
            </span>
          </div>
          <div className="innerbox">
            <div className="userandfillter">
              <ul className="user">
                <li className="image">
                  <User2 />
                </li>
                <li className="name">Bablu</li>
              </ul>
              <div className="fillter">
                <FilterFill width={14} />
                fillter
              </div>
            </div>
            <ul className="results">
              <li>
                <span className="bg_green">5</span>
                <div className="text">Correct</div>
              </li>
              <li>
                <span className="bg_white2">5</span>
                <div className="text">Unattempted</div>
              </li>
              <li>
                <span className="bg_red">5</span>
                <div className="text">Incorrect</div>
              </li>
              <li>
                <span className="bg_warrning">5</span>
                <div className="text">Partially Correct</div>
              </li>
            </ul>
            <div className="heading">
              Section : <span>Test</span>
            </div>
            <ul className="Qarbox">
              {series.questions.map((value, index) => {
                const active = value._id === selected._id;
                return (
                  <li
                    className="Qar"
                    key={index}
                    onClick={() => setSelected(value)}
                    style={{
                      borderRadius: active ? "20px" : "0px",
                    }}
                  >
                    {/* {value.en.value} */}
                    {index + 1}
                  </li>
                );
              })}
            </ul>
            <div className="actionbtnresult">
              <Button>Question Paper </Button>
              <Button>Summary</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context.query);
  const response = await fetch(`http://localhost:3000/api/v1/series`);
  const _data = await response.json();
  return {
    props: {
      data: _data,
    },
  };
};
