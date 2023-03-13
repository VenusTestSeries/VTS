/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CheckLine from "lib/icons/CheckLine";
import style from "styles/home.module.scss";
import ArrowRight from "lib/icons/ArrowRight";

const TestSeries = () => {
  return (
    <section className={`${style.productbox1} pt-50 pb-50`}>
      <div className="container">
        {data.map((item, index) => {
          const even = index % 2 === 0;
          console.log(even);
          return (
            <div key={index} className={`${style.rowsection} row`}>
              {!even && (
                <div className={`${style.bg_image1} vts-6`}>
                  <Image
                    src="/images/increase-delivery.webp"
                    height={335}
                    width={545}
                    alt="Test Series"
                  />
                </div>
              )}
              <div className={`${style.contentbox}  vts-6`}>
                <React.Fragment key={index}>
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                  <ul>
                    {item.list.map((l, i) => (
                      <li key={i}>
                        <CheckLine size={18} /> {l.label}
                      </li>
                    ))}
                  </ul>
                  <div className={`${style.buttonsection} button`}>
                    <Link href="#">
                      Learn more <ArrowRight />
                    </Link>
                  </div>
                </React.Fragment>
              </div>
              {even && (
                <div className={`${style.bg_image1} vts-6`}>
                  <Image
                    src="/images/increase-delivery.webp"
                    height={335}
                    width={545}
                    alt="Test Series"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TestSeries;

const data = [
  {
    heading: `Test Series`,
    description: `The Questions of The Test Series have been carefully picked by toppers of respective exams with over 10,000 hours of effort put into it to ensure relevancy`,
    list: [
      {
        label: `It covers all the important exams, including SSC, Banks, Railway, Defence.`,
      },
      {
        label: `Relevant and up-to-date questions`,
      },
      {
        label: `Best-Possible Solutions`,
      },
      {
        label: `Full analysis of the student's
                performance`,
      },
      {
        label: `Topic-Wise Tests`,
      },
    ],
  },
  {
    heading: `Study Material`,
    description: `We value your time and money and best way to learn is take tests that's why we designed a Library that includes all the resources to prepare for your exam through quizzes in one place.`,
    list: [
      {
        label: `English( Vocab , Grammar)`,
      },
      {
        label: `GS(Economy, Geography, History, Science, Polity,Current)`,
      },
      {
        label: `Math( Topic Wise)`,
      },
      {
        label: `Current Affairs`,
      },
      {
        label: `Notes of Toppers`,
      },
      {
        label: `Video Classes from Best Teachers`,
      },
    ],
  },
  {
    heading: `Playground`,
    description: ` "Playground is a fun and engaging way to prepare for your exams by letting you compete with your friends. It helps you in increase your speed at the same time you can earn rewards"`,
    list: [
      {
        label: `Create challenges for any exams or any topics`,
      },
      {
        label: `Create challenges for any exams or any topics`,
      },
      {
        label: `You can set limit of time and Number of questions`,
      },
    ],
  },
  {
    heading: `24/7 Support`,
    description: `As an Educational Platform, we understand the importance of customer support. That's why we have a dedicated team of experts available 24/7 to answer any questions or concerns you may have.`,
    list: [
      {
        label: `Ask your any doubts`,
      },
      {
        label: `Ask for better solutions`,
      },
      {
        label: `Ask for a scholarship`,
      },
      {
        label: `Ask for the job`,
      },
      {
        label: `Ask the Toppers of Exams about their strategy`,
      },
      {
        label: `Ask for an additional feature on our platform ask us through WhatsApp, Telegram, Email`,
      },
    ],
  },
];

{
  /* 1)English( Vocab , Grammar) 2) GS(Economy, Geography, History,
                Science ) 3) Math( Topic Wise) 4)Current Affairs 5) Notes of
                Toppers 6) Video Classes from Best Teachers */
}
