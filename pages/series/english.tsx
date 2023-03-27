import React from "react";
import Link from "next/link";
import Image from "next/image";
import User2 from "lib/icons/User2";
import Button from "components/button";
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

  const dataWithMultilanguage = React.useMemo(() => {
    // @ts-ignore
    return selected[language] as Question["en"];
  }, [language, selected]);

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
              <div className="text2">
                SSC CGL Tier 2 English Previous Paper 1 (Held on: 8 Aug 2022)
              </div>
            </li>
          </ul>
        </div>
        <div className="rightbox">
          <div className="box">
            <div className="timer countdowntime">
              Time Left <span>2</span>: <span>30</span> <span>20</span>{" "}
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
        <div className="leftsection">
          <div className="actual_exam_ui_top">
            <div className="left">
              <div className="text">Sections</div>
              <div className="button">
                <Link href="#">English Lang...</Link>
              </div>
            </div>
            <div className="right"></div>
          </div>

          <div className="mainbox">
            <div className="mainboxtop">
              <div className="left">
                <div className="tp-ques-number">Question No. 1</div>
                {/* <span className="currentQuestion badge bg_red">Incorrect</span>
                <div className="outtimging font_size_small">
                  <div style={{ lineHeight: "0px" }}>
                    <EmotionUnhappy width={14} color="#c0392b" />
                  </div>{" "}
                  You <span>00:38</span>
                  <div className="outtimging font_size_small">
                    Avg: <span>00:21</span>{" "}
                  </div>
                </div> */}
              </div>
              <div className="right">
                <div className="marking newmarking font_size13">
                  Marks{" "}
                  <div className="d-flex gap-5">
                    <span className="badge bg_green">+1</span>
                    <span className=" badge bg_red">-0.5</span>{" "}
                  </div>
                </div>

                <div className="timestart font_size13">
                  <div>Time</div>
                  <span>35:49</span>
                </div>

                <div className="dropdown d-flex">
                  <div className="d-flex align-items-center">
                    {" "}
                    <p className="font_size13">View in</p>
                  </div>
                  <div className="d-flex align-items-center pl-5 pr-5">
                    <select
                      className="selectopt"
                      onChange={({ target }) => setLanguage(target.value)}
                    >
                      <option value="en" selected>
                        English
                      </option>
                      <option value="hn">Hindi</option>
                    </select>
                  </div>
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

            <div className="twosectionqty">
              <div className="testboxtext">
                <div className="que_box">
                  <div className="body">
                    <div>
                      <p>
                        <strong>
                          Read the passage and answer the questions that follow.
                        </strong>
                      </p>

                      <p>
                        A new and extreme tourist attraction has just exploded
                        on to the scene in Iceland: Volcano Walking. It would
                        appear, according to Trip Advisor, that this is one trip
                        that cannot be missed, despite the extortionate cost.
                      </p>

                      <p>
                        The idea of making Thrihnukagigur volcano accessible was
                        the brainchild of Ami B. Stefansson, a doctor in
                        Reykjavik and a lifelong cave enthusiast. He has been
                        studying caves in Iceland since 1954 and some would
                        argue that there is no-one who has more experience.
                      </p>

                      <p>
                        Thrihnukagigur has always been special to Stefansson
                        ever since he was the first to descend down to the
                        crater base in 1974. Like most people who experience it,
                        he was utterly spellbound by its uniqueness and beauty
                        and made it his mission to protect and preserve this
                        stunning natural phenomenon. Unlike others who may have
                        only seen the profit that could be made from walking
                        into the mouth of a volcano, Stefansson believed that
                        the primary focus was to treat such a grand natural
                        wonder with the utmost respect, to protect and defend
                        it.
                      </p>

                      <p>
                        The first volcano tourists entered the volcano in 2005
                        and it has since been labelled as one of the most unique
                        tourist attractions in the world.
                      </p>

                      <p>
                        Volcano walkers are taken to the mouth of the crater
                        from where they are lowered in a basket into the depths
                        of the earth. People once thought that volcanoes were
                        portals to Hell and associated with death and
                        destruction and yet the entrance to the crater is
                        awe-inspiring and almost ethereal. The vastness of it
                        can feel overwhelming; it is the size of a cathedral and
                        the Statue of Liberty could easily fit into the shaft.
                        After 6 minutes and 120 metres, visitors arrive at the
                        crater base. The ground space is the size of three
                        full-sized basketball courts placed next to each
                      </p>

                      <p>
                        At the bottom there is a reverent hush. People whisper
                        in respect to the sleeping giant who has lain dormant
                        for 4,000 years. The subterranean walls are scorched
                        with colours from a divine palette: magenta red, vibrant
                        purple, burnt orange, vivid green and honey yellow. The
                        colour intensifies in certain places where 4000 years
                        ago the magma was pushed out with brutal force. This is
                        Mother Natures secret place, her private art studio
                        where visitors feel like trespassers. The protruding
                        rock faces show a tapestry of patterns and formations
                        that have been molded by heat, pressure and time.
                        Floodlights illuminate the walls and draw attention to
                        the beauty humans were never intended to see. A light
                        rain weeps from the porous rock&nbsp;above and covers
                        the crater sides with a shine that makes it sparkle. The
                        scorch marks can be seen close up - at one point in time
                        these rock faces were glowing red with fiery heat. This
                        giant, although sleeping, is still dangerous: an
                        80-metre drop into the void is disguised by a collection
                        of rocks close to where visitors stand.
                      </p>

                      <p>
                        It is a soul-enriching experience and visitors often
                        report feeling deeply moved by the beauty and{" "}
                        <strong>tranquillity</strong> of something that was once
                        so destructive and angry. Confronted with this result of
                        the unrestrained forces of nature, it is hard not to
                        feel small and powerless in comparison. Sadly, the
                        magical spell is broken when the basket appears,
                        indicating that it is time for visitors to return to
                        reality. On the return hike, visitors walk across the
                        lava fields as though they are astronauts on the moon.
                        They pass enormous open wounds where the landscape is
                        literally tearing itself apart as tectonic plates slowly
                        shift. It serves as one final reminder that this giant
                        is merely dormant, not dead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detailed_question newdetailed_question">
                <div className="que_ans_box">
                  <div className="que_box">
                    {/* The salary and allowances of leaders of opposition in
                  parliament are governed by the Act passed for the first time
                  by the parliament in the year ______. */}
                    {dataWithMultilanguage.value}
                  </div>
                  <ul className="que_option">
                    {/* @ts-ignore */}
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
            </div>
            <div className="detailed_questionfooter">
              <div className="d-flex gap-8">
                <Button onClick={onPrevious}>Mark For Review & Next</Button>
                <Button onClick={onPrevious}>Clear Response </Button>
              </div>
              <Button onClick={onNext}>Save & Next</Button>
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
              {/* <div className="fillter">
                <FilterFill width={14} />
                fillter
              </div> */}
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
              Section : <span> English Language & Com </span>
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
            </ul>
            <div className="actionbtnresult">
              <div className="d-flex gap-10">
                <Button>Question Paper </Button>
                <Button>Summary</Button>
              </div>
              <div className="d-flex">
                <Button>Submit Test </Button>
              </div>
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
