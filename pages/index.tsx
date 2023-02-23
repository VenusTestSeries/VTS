/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import Button from "components/button";
import PerPageLayout from "layout/perpage";
import style from "styles/home.module.scss";
import HeroSection from "components/home/hero";
import ArrowRight from "lib/icons/ArrowRight";
import Checkfill from "lib/icons/Checkfill";
import CheckLine from "lib/icons/CheckLine";
import pricingData from "constant/pricing";
import CloseIcon from "lib/icons/CloseIcon";
import Briefcaseline from "lib/icons/Briefcaseline";
import OurPartner from "components/home/our-partner";
import ProblemsAndSolutions from "components/home/problems";
import TestimonialSlider from "components/slider/testimonial";
import TestSeries from "components/home/test-series";
import PricingSection from "components/home/pricing";

import Slider from "react-slick";

function Home() {
  var settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    dots: false,
    margin: "50px",
  };
  return (
    <div>
      <HeroSection />

      <section className="bannerslider">
        <Slider {...settings}>
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <div key={i}>
                <img
                  src="https://static.uacdn.net/thumbnail/banner/9d1dad4098af4829b75d9beaf986a1a1.png"
                  alt="dsfsdf"
                  height="auto"
                />
              </div>
            );
          })}
        </Slider>
      </section>

      <section className={`${style.productbox1} pt-50 pb-50`}>
        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>Test Series </h2>
              <p>
                The Questions of The Test Series have been carefully picked by
                toppers of respective exams with over 10,000 hours of effort put
                into it to ensure relevancy
              </p>
              <ul>
                <li>
                  <CheckLine size={18} /> 1 It covers all the important exams,
                  including SSC, Banks, Railway , Defence.
                </li>
                <li>
                  {" "}
                  <CheckLine size={18} /> Relevant and up-to-date questions
                </li>
                <li>
                  {" "}
                  <CheckLine size={18} /> Best-Possible Solutions
                </li>
                <li>
                  <CheckLine size={18} /> Full analysis of the student's
                  performance
                </li>
                <li>
                  <CheckLine size={18} /> Topic-Wise Tests{" "}
                </li>
              </ul>
              <div className={`${style.buttonsection}  button`}>
                <Link href="#">
                  {" "}
                  Learn more <ArrowRight />{" "}
                </Link>
              </div>
            </div>
            <div className={`${style.bg_image1} vts-6`}>
              <Image
                src="/images/increase-delivery.webp"
                height={335}
                width={545}
                alt="Test Series"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.bg_image1} vts-6`}>
              <Image
                src="/images/build-thriving-team.webp"
                height={335}
                width={545}
                alt="Test Series"
              />
            </div>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>Study Material </h2>
              <p>
                We value your time and money and best way to learn is take tests
                that's why we designed a Library that includes all the resources
                to prepare for your exam through quizzes in one place.
                {/* 1)English( Vocab , Grammar) 2) GS(Economy, Geography, History,
                Science ) 3) Math( Topic Wise) 4)Current Affairs 5) Notes of
                Toppers 6) Video Classes from Best Teachers */}
              </p>
              <ul>
                <li>
                  <CheckLine size={18} /> English( Vocab , Grammar)
                </li>
                <li>
                  {" "}
                  <CheckLine size={18} /> GS(Economy, Geography, History,
                  Science ,Polity,Current)
                </li>
                <li>
                  {" "}
                  <CheckLine size={18} /> Math( Topic Wise)
                </li>

                <li>
                  <CheckLine size={18} /> Current Affairs
                </li>
                <li>
                  <CheckLine size={18} /> Notes of Toppers
                </li>
                <li>
                  <CheckLine size={18} /> Video Classes from Best Teachers
                </li>
              </ul>
              <div className={`${style.buttonsection}  button`}>
                <Link href="#">
                  {" "}
                  Learn more <ArrowRight />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>Playground</h2>
              <p>
                "Playground is a fun and engaging way to prepare for your exams
                by letting you compete with your friends. It helps you in
                increase your speed at the same time you can earn rewards"
                {/* 1)Create challenges for any exams or any topics
2) Earn rewards in form of free test series and study material.
3) You can set limit of time and Number of questions */}
              </p>
              <ul>
                <li>
                  <CheckLine size={18} /> Create challenges for any exams or any
                  topics
                </li>
                <li>
                  <CheckLine size={18} /> Create challenges for any exams or any
                  topics
                </li>
                <li>
                  <CheckLine size={18} /> You can set limit of time and Number
                  of questions
                </li>
              </ul>

              <div className={`${style.buttonsection}  button`}>
                <Link href="#">
                  {" "}
                  Learn more <ArrowRight />{" "}
                </Link>
              </div>
            </div>
            <div className={`${style.bg_image1} vts-6`}>
              <Image
                src="/images/say-goodbye-to-wasted-efforts.png"
                height={335}
                width={545}
                alt="Test Series"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.bg_image1} vts-6`}>
              <Image
                src="/images/build-thriving-team.webp"
                height={335}
                width={545}
                alt="Test Series"
              />
            </div>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>24/7 Support </h2>
              <p>
                As an Educational Platform, we understand the importance of
                customer support. That's why we have a dedicated team of experts
                available 24/7 to answer any questions or concerns you may have.
                {/* 1) Ask your any  doubts
2) Ask for better solutions
3) Ask for a scholarship
4) Ask for the job 
5) Ask to Toppers of Exams about their strategy
6) Ask for an additional feature on our platform
ask us through WhatsApp, Telegram, Email */}
              </p>
              <ul>
                <li>
                  <CheckLine size={18} />
                  Ask your any doubts
                </li>
                <li>
                  <CheckLine size={18} />
                  Ask for better solutions
                </li>
                <li>
                  <CheckLine size={18} />
                  Ask for a scholarship
                </li>
                <li>
                  <CheckLine size={18} />
                  Ask for the job
                </li>
                <li>
                  <CheckLine size={18} />
                  Ask the Toppers of Exams about their strategy
                </li>
                <li>
                  <CheckLine size={18} />
                  Ask for an additional feature on our platform ask us through
                  WhatsApp, Telegram, Email
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 pb-50">
        <div className="container">
          <h2 className="text_center heading2">Why VTS</h2>
          <div className="row">
            <div className="vts-4">
              <div className={style.boxdesign1}>
                <div className={style.image}>
                  <img src="/svg/popular.svg" alt="" />
                </div>
                <h3>Quality Test Series</h3>
                <ul>
                  <li>Donec vitae magna in libero lacinia lobortis.</li>
                  <li>Phasellus accumsan elit ut ultrices sagittis.</li>
                  <li>
                    Vestibulum vitae risus dictum, interdum augue eget, bibendum
                    nisi.
                  </li>
                  <li>Ut gravida lacus non egestas feugiat.</li>
                </ul>
              </div>
            </div>
            <div className="vts-4">
              <div className={style.boxdesign1}>
                <div className={style.image}>
                  <img src="/svg/popular.svg" alt="" />
                </div>
                <h3>Quality Study Material</h3>
                <ul>
                  <li>Donec vitae magna in libero lacinia lobortis.</li>
                  <li>Phasellus accumsan elit ut ultrices sagittis.</li>
                  <li>
                    Vestibulum vitae risus dictum, interdum augue eget, bibendum
                    nisi.
                  </li>
                  <li>Ut gravida lacus non egestas feugiat.</li>
                </ul>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign1}>
                <div className={style.image}>
                  <img src="/svg/popular.svg" alt="" />
                </div>
                <h3>Quality Support From Team</h3>
                <ul>
                  <li>Donec vitae magna in libero lacinia lobortis.</li>
                  <li>Phasellus accumsan elit ut ultrices sagittis.</li>
                  <li>
                    Vestibulum vitae risus dictum, interdum augue eget, bibendum
                    nisi.
                  </li>
                  <li>Ut gravida lacus non egestas feugiat.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProblemsAndSolutions />
      <OurPartner />
      {/* <section className={`${style.problemssecton} pt-50 pb-50`}>
        <div className="container">
          <h2 className="text_center  heading2 text_primary mb-50">
            How we Solve Your problems?
          </h2>
        </div>
        <div className="container">
          <ul className={style.problembox}>
            <li className={style.topround}>
              <div className={style.box}>
                <div className={style.big}>1</div>
                <h5>solutin 1</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
            </li>
            <li className={style.bottomround}>
              <div className={style.box}>
                <div className={style.big}>2</div>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
                <h5>solutin 2</h5>
              </div>
            </li>
            <li className={style.topround}>
              <div className={style.box}>
                <div className={style.big}>3</div>
                <h5>solutin 3</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
            </li>
            <li className={style.bottomround}>
              <div className={style.box}>
                <div className={style.big}>4</div>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>

                <h5>solutin 4</h5>
              </div>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row justfiy_content_center">
            <div className="vts-3">
              <div className={style.callbtn}>
                <Button theme="secondry">Call To Action</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className={`${style.testimonialsone} pt-50 pb-50`}>
        <div className="container">
          <h2 className="text_center heading2 text_graydark mb-50">
            How we solve
          </h2>

          <TestimonialSlider
            items={[
              {
                element: (
                  <div className="row justfiy_content_center">
                    <div className="vts-10">
                      <div className={style.testimonialsoneslider}>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                        <div className={style.imagewithtext}>
                          <div className={style.image}>
                            <img src="/images/avtar.png" alt="" />
                          </div>
                          <div className={style.name}>
                            <h4>Lorem Ipsum</h4>
                            <h5>CTO</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                element: (
                  <div className="row justfiy_content_center">
                    <div className="vts-10">
                      <div className={style.testimonialsoneslider}>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                        <div className={style.imagewithtext}>
                          <div className={style.image}>
                            <img src="/images/avtar.png" alt="" />
                          </div>
                          <div className={style.name}>
                            <h4>Lorem Ipsum</h4>
                            <h5>CTO</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                element: (
                  <div className="row justfiy_content_center">
                    <div className="vts-10">
                      <div className={style.testimonialsoneslider}>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                        <div className={style.imagewithtext}>
                          <div className={style.image}>
                            <img src="/images/avtar.png" alt="" />
                          </div>
                          <div className={style.name}>
                            <h4>Lorem Ipsum</h4>
                            <h5>CTO</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="container">
          <div className="row justfiy_content_center">
            <div className="vts-3">
              <div className={style.callbtn}>
                <Button theme="secondry">Call To Action</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.section1} pt-50 pb-50`}>
        <div className="container">
          <div className="row">
            <div className="vts-5">
              <div className={style.contentbox}>
                <h2 className="  heading2 text_primary">
                  What is Lorem Ipsum?
                </h2>
                <p className="font_size16 font-w500 text_primary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s <br />
                  <br />
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                  <br />
                </p>

                <div className="vts-6 mt-50 pl-0">
                  <div className={style.callbtn}>
                    <Button theme="secondry">Call To Action</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="vts-7">
              <div className={style.image}>
                <img
                  src="/images/a7799e23-e213-4262-bbed-52bf91a9e866.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <PricingSection />
      <section className="getinquery bg_primary pt-50 pb-50 ">
        <div className="container">
          <h2 className="text_center  heading2 text_graydark mb-50">
            Enquire Now
          </h2>

          <div className="row justfiy_content_center">
            <div className="vts-8 ">
              <div className={style.getinquerybox}>
                <div className="row">
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Frist Name"></label>
                      <input
                        type="text"
                        id="frist name"
                        placeholder="frist name"
                      />
                    </div>
                  </div>
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Last Name"></label>
                      <input
                        type="text"
                        id="Last name"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Company "></label>
                      <input type="text" id="Company " placeholder="Company" />
                    </div>
                  </div>
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Job Title"></label>
                      <input
                        type="text"
                        id="Job Title"
                        placeholder="Job Title"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="vts-12">
                    <div className={style.inputbox}>
                      <label htmlFor="Email Addres "></label>
                      <input
                        type="text"
                        id="Email Addres "
                        placeholder="Email Addres"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Phone Number "></label>
                      <input
                        type="text"
                        id="Phone Number "
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="vts-6">
                    <div className={style.inputbox}>
                      <label htmlFor="Country"></label>
                      <input type="text" id="Country" placeholder="Country" />
                    </div>
                  </div>
                </div>
                <div className="row justfiy_content_center">
                  <div className="vts-6">
                    <Button theme="secondry">BUY NOW</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

Home.perpage = PerPageLayout;

// const questionandanswer = [
//   {
//     question: `Irrelvant Questions In Test Series `,
//     answer: ` We talked to many government job asipirants and ask them what problems they are facing in other test platforms. Almost all of them had mentioned the problem of Irrelavncy of questions in test-series. Questions were either too difficult or too easy , it made assessment of their preparation harder`,
//   },
//   {
//     question: `Everone question is handpicked by Dedicated team ',

//     answer: ` Having first hand experience of this problems while preparation of the government jobs. We understand the importance of quality and relvancy of questions that's we created a dedicated team just to solve this issue.
//     Let's see how we do
//     1) First  Our team create original question based on  frequently asked questions  in various examinatin
//     2) Then these questions are sorted based on relevancy and importance by toppers of the respective  exam
//     3) Afterthat it is sent to get reviewed by subject matter experts.
//     4) once review is complete , Test is prepared.`,
//   },
// ];
