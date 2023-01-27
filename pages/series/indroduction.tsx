import React from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "/styles/Indroduction.module.scss";
import Button from "components/button";

const Indroduction = () => {
  return (
    <div className={Style.indroductionpage}>
      <div className={Style.header}>
        <div className={Style.logo}>
          <Image src="../svg/1_Logo-4.svg" height={40} width={240} alt="Logo" />
        </div>
        <div className={Style.text}>SSC MTS Mini Full Test 1</div>
      </div>

      <div className={Style.test_instructions}>
        <div className="container-fluid">
          <div className="row">
            <div className="vts-12">
              <div className={Style.contentbox}>
                <h4>General Instructions:</h4>
                <ol>
                  <li>
                    <p>
                      The clock will be set at the server. The countdown timer
                      at the top right corner of screen will display the
                      remaining time available for you to complete the
                      examination. When the timer reaches zero, the examination
                      will end by itself. You need not terminate the examination
                      or submit your paper.
                    </p>
                  </li>
                  <li>
                    <p>
                      The Question Palette displayed on the right side of screen
                      will show the status of each question using one of the
                      following symbols:
                    </p>
                    <ul className="que-ans-states hide-on-railway">
                      <li>
                        <span className="label"></span> You have not visited the
                        question yet.
                      </li>
                      <li>
                        <span className="label skipped"></span> You have not
                        answered the question.
                      </li>
                      <li>
                        <span className="label attempted"></span> You have
                        answered the question.
                      </li>
                      <li>
                        <span className="label bookmarked"></span> You have NOT
                        answered the question, but have marked the question for
                        review.
                      </li>
                      <li>
                        <span className="label attempted bookmarked"></span> You
                        have answered the question, but marked it for review.
                      </li>
                    </ul>
                    <ul className="railway-instructions-legend show-on-railway">
                      <li>
                        <span className="new-legend not-answered"></span> You
                        have not answered the question.
                      </li>
                      <li>
                        <span className="new-legend answered"></span> You have
                        answered the question.
                      </li>
                      <li>
                        <span className="new-legend reviewed"></span> You have
                        NOT answered the question, but have marked the question
                        for review.
                      </li>
                      <li>
                        <span className="new-legend reviewed-answered"></span>{" "}
                        You answered the question also marked the question for
                        review.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  The <b>Mark For Review</b> status for a question simply
                  indicates that you would like to look at that question again.
                  If a question is answered, but marked for review, then the
                  answer will be considered for evaluation unless the status is
                  modified by the candidate.
                </p>
                <b>Navigating to a Question :</b>
                <ol>
                  <li>
                    <p>To answer a question, do the following:</p>
                    <ol>
                      <li>
                        Click on the question number in the Question Palette at
                        the right of your screen to go to that numbered question
                        directly. Note that using this option does NOT save your
                        answer to the current question.
                      </li>
                      <li>
                        Click on <b>Save &amp; Next</b> to save your answer for
                        the current question and then go to the next question.
                      </li>
                      <li>
                        Click on{" "}
                        <b>
                          Mark for Review{" "}
                          <span className="hide-on-railway">&amp; Next</span>
                        </b>{" "}
                        to save your answer for the current question and also
                        mark it for review{" "}
                        <span className="hide-on-railway">
                          , and then go to the next question.
                        </span>
                      </li>
                    </ol>
                  </li>
                </ol>
                <p>
                  Note that your answer for the current question will not be
                  saved, if you navigate to another question directly by
                  clicking on a question number <span>without saving</span> the
                  answer to the previous question.
                </p>
                <p>
                  You can view all the questions by clicking on the{" "}
                  <b>Question Paper</b> button.{" "}
                  <span style={{ color: "red" }}>
                    This feature is provided, so that if you want you can just
                    see the entire question paper at a glance.
                  </span>
                </p>
                <h4>Answering a Question :</h4>
                <ol>
                  <li>
                    <p>
                      Procedure for answering a multiple choice (MCQ) type
                      question:
                    </p>
                    <ol>
                      <li>
                        Choose one answer from the 4 options (A,B,C,D) given
                        below the question
                        <span className="hide-on-railway">
                          , click on the bubble placed before the chosen option.
                        </span>
                      </li>
                      <li className="hide-on-railway">
                        To deselect your chosen answer, click on the bubble of
                        the chosen option again or click on the{" "}
                        <b>
                          <span className="hide-on-railway">
                            Clear Response
                          </span>{" "}
                          <span className="show-on-railway">Erase Answer</span>
                        </b>{" "}
                        button
                      </li>
                      <li>
                        To change your chosen answer, click on the bubble of
                        another option.
                      </li>
                      <li>
                        To save your answer, you MUST click on the{" "}
                        <b>Save &amp; Next</b>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      Procedure for answering a numerical answer type question :
                    </p>
                    <ol>
                      <li>
                        To enter a number as your answer, use the virtual
                        numerical keypad.
                      </li>
                      <li>
                        A fraction (e.g. -0.3 or -.3) can be entered as an
                        answer with or without before the decimal point.{" "}
                        <span style={{ color: "red" }}>
                          As many as four decimal points, e.g. 12.5435 or 0.003
                          or -932.6711 or 12.82 can be entered.
                        </span>
                      </li>
                      <li>
                        To clear your answer, click on the <b>Clear Response</b>{" "}
                        button
                      </li>
                      <li>
                        To save your answer, you MUST click on the{" "}
                        <b>Save &amp; Next</b>
                      </li>
                    </ol>
                  </li>
                  <li ng-show="isJeeTestInterfaceUsed" className="ng-hide">
                    <p>
                      Procedure for answering a multiple correct answers (MCAQ)
                      type question
                    </p>
                    <ol>
                      <li>
                        Choose one or more answers from the 4 options (A,B,C,D)
                        given below the question, click on the bubble placed
                        before the chosen option.
                      </li>
                      <li>
                        To deselect your chosen answer, click on the checkbox of
                        the chosen option again
                      </li>
                      <li>
                        To clear your marked responses, click on the{" "}
                        <b>Clear Response</b> button
                      </li>
                      <li>
                        To save your answer, you MUST click on the{" "}
                        <b>Save &amp; Next</b> button
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>
                      To mark a question for review, click on the{" "}
                      <b>
                        Mark for Review{" "}
                        <span className="hide-on-railway">&amp; Next</span>
                      </b>{" "}
                      button. If an answer is selected (for MCQ/MCAQ) entered
                      (for numerical answer type) for a question that is{" "}
                      <b>Marked for Review</b> , that answer will be considered
                      in the evaluation unless the status is modified by the
                      candidate.
                    </p>
                  </li>
                  <li>
                    <p>
                      To change your answer to a question that has already been
                      answered, first select that question for answering and
                      then follow the procedure for answering that type of
                      question.
                    </p>
                  </li>
                  <li>
                    <p>
                      Note that ONLY Questions for which answers are{" "}
                      <b>saved</b> or <b>marked for review after answering</b>{" "}
                      will be considered for evaluation.
                    </p>
                  </li>
                  <li>
                    <p>
                      Sections in this question paper are displayed on the top
                      bar of the screen. Questions in a Section can be viewed by
                      clicking on the name of that Section. The Section you are
                      currently viewing will be highlighted.
                    </p>
                  </li>
                  <li>
                    <p>
                      After clicking the <b>Save &amp; Next</b> button for the
                      last question in a Section, you will automatically be
                      taken to the first question of the next Section in
                      sequence.
                    </p>
                  </li>
                  <li>
                    <p>
                      You can move the mouse cursor over the name of a Section
                      to view the answering status for that Section.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className={Style.footer}>
              <div className={Style.linkstyle}>
                <Link href="#">← Go to Tests</Link>
              </div>
              <div className={Style.btn}>
                <Button>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.student_profile}>
        <div className={Style.innerbox}>
          <div className={Style.image}>
            <Image
              src="/svg/tb-avatar.svg"
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <div className={Style.name}>Test</div>
        </div>
      </div>
    </div>
  );
};

export default Indroduction;
