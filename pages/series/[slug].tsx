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
import seriesData from "constant/dummy";

/**
 * Test Series Interface
 * @returns
 */

const TestSeries = () => {
  const [language, setLanguage] = React.useState("en");

  const [selected, setSelected] = React.useState(
    seriesData.data.sections[0].questions[0]
  );

  // FOR NEXT BUTTON
  const onNext = () => {
    const findIndex = seriesData.data.sections[0].questions.findIndex(
      (value) => value._id === selected._id
    );
    const data =
      findIndex < seriesData.data.sections[0].questions.length - 1
        ? seriesData.data.sections[0].questions[findIndex + 1]
        : seriesData.data.sections[0].questions[0];
    setSelected(data);
  };
  const onPrevious = () => {
    const findIndex = seriesData.data.sections[0].questions.findIndex(
      (value) => value._id === selected._id
    );
    const data =
      findIndex > 0
        ? seriesData.data.sections[0].questions[findIndex - 1]
        : seriesData.data.sections[0].questions[0];
    setSelected(data);
  };

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
            <div className="timer">2:30</div>
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
        <div className="leftsection">
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
                <select onChange={({ target }) => setLanguage(target.value)}>
                  <option value="en" selected>
                    English
                  </option>
                  <option value="hn">Hindi</option>
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
                <div className="que_box">
                  {/* The salary and allowances of leaders of opposition in
                  parliament are governed by the Act passed for the first time
                  by the parliament in the year ______. */}
                  {selected[language].value}
                </div>
                <ul className="que_option">
                  {selected[language].options.map((item, index) => {
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
        <div className="rightsection">
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
              {seriesData.data.sections[0].questions.map((value, index) => {
                const active = value._id === selected._id;

                return (
                  <li
                    className="Qar "
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
              {/* <li className="Qar bg_red">1</li>
              <li className="Qar bg_red">2</li>
              <li className="Qar bg_red">3</li>
              <li className="Qar bg_green">4</li>
              <li className="Qar bg_green">5</li>
              <li className="Qar bg_warrning">6</li>
              <li className="Qar">7</li>
              <li className="Qar">8</li>
              <li className="Qar">9</li>
              <li className="Qar">10</li>
              <li className="Qar">12</li>
              <li className="Qar">13</li>
              <li className="Qar">14</li>
              <li className="Qar">15</li>
              <li className="Qar">16</li>
              <li className="Qar">17</li>
              <li className="Qar">18</li>
              <li className="Qar">19</li>
              <li className="Qar">20</li>
              <li className="Qar">21</li>
              <li className="Qar">22</li>
              <li className="Qar">23</li>
              <li className="Qar">24</li>
              <li className="Qar">25</li>
              <li className="Qar">26</li>
              <li className="Qar">27</li> */}
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

{
  /* 
                  <li>
                    <label htmlFor="2">
                      <input id="2" type="radio" name="light" />
                      <div className="qtytext"> Option 1</div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="3">
                      <input id="3" type="radio" name="light" />
                      <div className="qtytext"> Option 1</div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="4">
                      <input id="4" type="radio" name="light" />
                      <div className="qtytext"> Option 1</div>
                    </label>
                  </li> */
}
