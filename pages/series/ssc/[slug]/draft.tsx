import React from "react";
import Link from "next/link";
import FilterFill from "lib/icons/FilterFill";
import User2 from "lib/icons/User2";
import Button from "components/button";
import Report from "lib/icons/Report";
import { QuestionTypes } from "constant/types";
import ChevronBack from "lib/icons/ChevronBack";
import { GetServerSidePropsContext } from "next";
import timeFormat from "constant/time-format";
import { useRouter } from "next/router";
import ChevronForward from "lib/icons/ChevronForward";
import useInterval from "hooks/use-interval";
import { TestSectionResponseType } from "typings/series";
import Image from "next/image";
import { useImmer } from "use-immer";

interface TestSeriesProps {
  _data_: TestSectionResponseType;
}

const TestSeries = ({ _data_: _data_ }: TestSeriesProps) => {
  // const series = seriesArray;
  const {
    count,
    series,
    onNext,
    onPrevious,
    onSubmitTest,
    onToggleSection,
    toggleSection,
    dataWithMultilanguage,
    examSections,
    onChangeLanguage,
    actualData,
    onActiveSection,
    activeSection,
    language,
    marks,
    questionIndex,
    selected,
    setSelected,
    onSelectOption,
  } = useTestSeries(_data_);

  console.log(series);
  return (
    <div className="seriepage">
      <div className="header newheader">
        <div className="leftbox">
          <ul>
            <li className="icon">
              {/* <Link href="#"> */}
              <Image
                src="\svg\1_Logo-4.svg"
                height={40}
                width={200}
                alt="logo"
              />
              {/* </Link> */}
            </li>
            <li className="text">
              <div className="text2 text_black">{series.title}</div>
            </li>
          </ul>
        </div>
        <div className="rightbox">
          <div className="box">
            <div className="timer countdowntime">
              Time Left <span>{timeFormat(count).hours}</span>
              {":"}
              <span>{timeFormat(count).minutes}</span>
              {":"}
              <span>{timeFormat(count).seconds}</span>
            </div>
            <div className="actionbtn">
              <Link href="#" className="btn outlineblue">
                Switch Full Screen
              </Link>
              <Link href="#" className="btn outlineblue">
                Pause
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="seriebox">
        <div
          className="leftsection"
          style={{
            marginRight: toggleSection ? "0px" : "300px",
          }}
        >
          <div className="actual_exam_ui_top">
            <div className="left">
              <div className="text">Sections</div>
              <div className="button">
                {examSections.map((item, index) => {
                  return (
                    <a
                      key={index}
                      onClick={() => onActiveSection(item.label)}
                      style={{
                        background:
                          item.label === activeSection ? "#166a84" : "#f1f1f1",
                        color:
                          item.label === activeSection ? "#ffffff" : "#000000",
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="right">
              <div>View in</div>
              <div className="dropdown">
                <select
                  defaultValue={language}
                  onChange={({ target }) => onChangeLanguage(target.value)}
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
                <div className="tp-ques-number">
                  Question No. {questionIndex + 1}
                </div>
              </div>
              <div className="right">
                <div className="outtimging font_size_small">
                  <div className="marking">
                    Marks
                    <div className="row" style={{ margin: "0", gap: "4px" }}>
                      <span className="badge bg_green">{marks.positive}</span>
                      <span className="badge bg_red">{marks.negative}</span>
                    </div>
                  </div>
                </div>
                <div className="Report">
                  <Link href="#">
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
                  {/* ts-ignore */}
                  {selected[language]?.options.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          onSelectOption(
                            activeSection,
                            selected[language],
                            index,
                            "changed"
                          )
                        }
                      >
                        <label id={`${index}`}>
                          <input id={`${index}`} type="radio" name="light" />
                          <div className="qtytext"> {item.value}</div>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="detailed_questionfooter">
              <div className="d-flex vts-gap-8">
                <Button onClick={onPrevious}>Mark for Review & Next</Button>
                <Button onClick={onPrevious}>Clear Response</Button>
              </div>
              <div>
                <Button
                  onClick={onNext}
                  style={{
                    color: "#fff",
                    backgroundColor: "#1fbad6",
                  }}
                >
                  Save & Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rightsection"
          style={{
            transformOrigin: "right",
            transition: "all 100ms ease",
            width: toggleSection ? "0px" : "300px",
          }}
        >
          <div className="toogle-section">
            <span onClick={onToggleSection}>
              {toggleSection ? (
                <ChevronBack size={18} />
              ) : (
                <ChevronForward size={18} />
              )}
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
                <span className="answered_badge">0</span>
                <div className="text">Answered</div>
              </li>
              <li>
                <span className="marked_badge">0</span>
                <div className="text">Marked</div>
              </li>
              <li>
                <span className="not_visited_badge">5</span>
                <div className="text">Not Visited</div>
              </li>
              <li>
                <span className="marked_and_answered_badge">5</span>
                <div className="text">Marked And Answered</div>
              </li>
              <li>
                <span className="not_answered_badge">5</span>
                <div className="text">Not Answered</div>
              </li>
            </ul>
            <div className="heading">
              Section : <span>Test</span>
            </div>
            <ul className="Qarbox">
              {actualData?.questions.map((value, index) => {
                const active = value._id === selected._id;

                return (
                  <li
                    className={`Qar ${active ? "bg_red" : "bg_white"}`}
                    key={index}
                    onClick={() => setSelected(value)}
                    style={{
                      borderRadius: active ? "20px" : "0px",
                    }}
                  >
                    {index + 1}
                  </li>
                );
              })}
              <li className="Qar answered_badge">1</li>
              <li className="Qar marked_badge">2</li>
              <li className="Qar not_answered_badge">3</li>
              <li className="Qar marked_and_answered_badge">4</li>
              <li className="Qar bg_green">5</li>
              <li className="Qar bg_warrning">6</li>
            </ul>
            <div className="actionbtnresult">
              <div className="d-flex gap-10">
                <Button>Question Paper </Button>
                <Button>Summary</Button>
              </div>
              <div className="d-flex">
                <Button
                  onClick={onSubmitTest}
                  style={{
                    color: "#fff",
                    backgroundColor: "#1fbad6",
                  }}
                >
                  Submit Test{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;

// getServerSideProps
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const seriesId = context.query?.slug && context.query.slug;
  const response = await fetch(
    `http://localhost:3000/api/v1/series/${seriesId}/sections`
  );
  const _data_ = await response.json();
  return {
    props: {
      _data_,
    },
  };
};

// CUSTOM HOOK FOR IMPLEMENTION

const useTestSeries = (seriesArray: TestSectionResponseType) => {
  const [series, updateSeries] = useImmer(seriesArray);

  React.useMemo(() => {
    if (seriesArray) {
      updateSeries(seriesArray);
    }
  }, [seriesArray, updateSeries]);
  const [language, setLanguage] = React.useState("english");
  // GET VALUE WHEN SELECT OPTION

  const onSelectOption = React.useCallback(
    (
      sectionIndex: number,
      questionIndex: number,
      optionIndex: number,
      changableValue: boolean
    ) => {
      updateSeries((draft) => {
        draft.sections[sectionIndex]?.questions[questionIndex][
          language
        ]?.options[optionIndex]?.value = changableValue;
      });
    },
    [language, updateSeries]
  );
  const [toggleSection, setToggleSection] = React.useState(false);
  const onToggleSection = React.useCallback(() => {
    setToggleSection(!toggleSection);
  }, [toggleSection]);

  const onChangeLanguage = React.useCallback((value: string) => {
    setLanguage(value);
  }, []);
  const [selected, setSelected] = React.useState(
    series.sections[0].questions[0]
  );
  const marks = React.useMemo(() => {
    return series.sections[0].marks;
  }, [series.sections]);

  const questionIndex = series.sections[0]?.questions.findIndex(
    (value) => value._id === selected._id
  );
  const router = useRouter();
  const examSections = series.sections.map((item) => {
    return {
      label: item.title,
    };
  });

  const [activeSection, setActiveSection] = React.useState(
    examSections[0].label
  );

  const onActiveSection = React.useCallback((value: string) => {
    setActiveSection(value);
  }, []);
  const actualData = React.useMemo(() => {
    return series.sections.find((data) => data.title === activeSection);
  }, [activeSection, series.sections]);

  // FOR NEXT BUTTON
  const onNext = React.useCallback(() => {
    if (actualData) {
      const findIndex = actualData.questions.findIndex(
        (value) => value._id === selected._id
      );
      const data =
        findIndex < actualData?.questions?.length - 1
          ? actualData.questions[findIndex + 1]
          : actualData.questions[0];
      setSelected(data);
    }
  }, [actualData, selected?._id]);
  // FOR PREVIOUS BUTTON
  const onPrevious = React.useCallback(() => {
    if (actualData) {
      const findIndex = actualData.questions.findIndex(
        (value) => value._id === selected._id
      );
      const data =
        findIndex > 0
          ? actualData.questions[findIndex - 1]
          : actualData.questions[0];
      setSelected(data);
    }
  }, [actualData, selected?._id]);

  // COUNT DOWN
  // 3600 ()
  const [count, setCount] = React.useState(series.duration);
  // 60 -> 1 Min
  // 3000 second = 3000 * 60 =>

  // useInterval(
  //   () => {
  //     if (count <= 0) {
  //       alert("Time Up");
  //       setCount(0);
  //     } else {
  //       setCount((i) => i - 1);
  //     }
  //   },
  //   count === 0 ? null : 1000,
  //   true
  // );

  const __id = router?.query?.slug as string;

  const onSubmitTest = () => {
    router.push(`/series/ssc/${__id}/analysis`);
  };

  return {
    count,
    series,
    onNext,
    onPrevious,
    onSubmitTest,
    onToggleSection,
    toggleSection,
    examSections,
    onChangeLanguage,
    actualData,
    onActiveSection,
    language,
    activeSection,
    marks,
    questionIndex,
    selected,
    setSelected,
    onSelectOption,
    dataWithMultilanguage: React.useMemo(() => {
      // @ts-ignore
      return selected[language] as QuestionTypes["english"];
    }, [language, selected]),
  };
};
