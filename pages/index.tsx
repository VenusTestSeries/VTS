/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import StarIcon from "lib/icons/star";
import Button from "components/button";
import PerPageLayout from "layout/perpage";
import style from "../styles/home.module.scss";
import TestimonialSlider from "components/slider/testimonial";
import HeroSection from "components/home/hero";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "lib/icons/ArrowRight";
import Briefcaseline from "lib/icons/Briefcaseline";
import CheckmarkICloud from "lib/icons/CheckmarkICloud";
import Checkfill from "lib/icons/Checkfill";
import Flashlightline from "lib/icons/Flashlightline";
import CheckLine from "lib/icons/CheckLine";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className={`${style.productbox1} pt-50 pb-50`}>
        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>Test Series </h2>
              <p>
                Identify bottlenecks and developer friction, improve flow
                efficiency and deployment, and build healthy development
                patterns.
              </p>
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
          </div>
        </div>
        <div className="container">
          <div className={`${style.rowsection} row`}>
            <div className={`${style.contentbox}  vts-6`}>
              <h2>Playground</h2>
              <p>
                Identify bottlenecks and developer friction, improve flow
                efficiency and deployment, and build healthy development
                patterns.
              </p>
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
                Identify bottlenecks and developer friction, improve flow
                efficiency and deployment, and build healthy development
                patterns.
              </p>
              <div className={`${style.buttonsection}  button`}>
                {/* <Link href="#">
                  {" "}
                  Learn more <ArrowRight />{" "}
                </Link> */}
                <ul>
                  <li>
                    {" "}
                    <CheckLine size={18} /> Donec vitae magna in libero lacinia
                    lobortis.
                  </li>
                  <li>
                    {" "}
                    <CheckLine size={18} /> Phasellus accumsan elit ut ultrices
                    sagittis.
                  </li>
                  <li>
                    <CheckLine size={18} />
                    Vestibulum vitae risus dictum, interdum augue eget, bibendum
                    nisi.
                  </li>
                  <li>
                    {" "}
                    <CheckLine size={18} /> Ut gravida lacus non egestas
                    feugiat.
                  </li>
                </ul>
              </div>
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
            </div>

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
            </div>
          </div>

          <div className={style.callbtn}>
            <Button theme="secondry">Call To Action</Button>
          </div>
        </div>
      </section>

      <section className=" pt-50 pb-50">
        <div className="container">
          <h2 className="text_center heading2 text_primary">Our Partner</h2>
          <div className="row"></div>
        </div>
      </section>

      <section className={`${style.section1} pt-50 pb-50`}>
        <div className="container">
          <div className="row">
            <div className="vts-7">
              <div className={style.image}>
                <img
                  src="/images/a7799e23-e213-4262-bbed-52bf91a9e866.png"
                  alt=""
                />
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <section className={`${style.testimonialsection} pt-50 pb-50`}>
        <div className="container">
          <h2 className="text_center  heading2 text_graydark">Testimonials</h2>
          <p className="font_size18 text_center font-w600 text_skyblue">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </p>

          <TestimonialSlider
            options={{
              autoplay: true,
              interval: 2000,
            }}
            items={[
              {
                element: (
                  <div className="row mt-50">
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Shrikant Pandey</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          "VTS not only helped me prepare for SSC exams, but
                          also provided me with an interactive way to learn
                          through Quizzes and Playground. Competing with other
                          students made my learning experience more fun and
                          engaging. I highly recommend VTS to anyone looking to
                          excel in SSC exams."
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Shrikant Pandey</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          "I remember the feeling of lost I used to get when
                          thinking about highly competitive exams like SSC. I
                          knew I needed help but didn't know where to turn.
                          That's when I found VTS. The quality resources
                          available on the platform and its easy to use
                          interface made my learning journey so easy to excel in
                          SSC exams. The Quizzes and Playground feature made my
                          learning experience more interactive and fun. Thanks
                          to VTS, I was able to improve my test-taking
                          performance and achieve my goals. I am eternally
                          grateful."
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4> Shrikant Pandey</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          "I've tried other test-series platform in the past,
                          but none of them came close to the level of detail and
                          quality of VTS. I felt lack of quality in their tests
                          , almost every test platform just copy and pasted
                          previous years questions. No real efforts were put
                          into preparring test. VTS , a quite new platform but
                          quite original in their contents . I highly recommend
                          its Test-Series over any other platform out there."
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                element: (
                  <div className="row mt-50">
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                element: (
                  <div className="row mt-50">
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                    <div className="vts-4">
                      <div className={style.testimonialbox}>
                        <div className={style.image}>
                          <img src="/images/avtar.png" alt="" />
                        </div>
                        <div className={style.name}>
                          <h4>Lorem Ipsum</h4>
                          <h5>Where does it come from?</h5>
                        </div>
                        <div className={style.review}>
                          <ul>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                            <li>
                              <StarIcon></StarIcon>
                            </li>
                          </ul>
                        </div>
                        <div className={style.content}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <div className="container mt-50">
            <div className="row justfiy_content_center">
              <div className="vts-3">
                <div className={style.callbtn}>
                  <Button theme="secondry">Call To Action</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.problemssecton} pt-50 pb-50`}>
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
      </section>

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

      <section className={`${style.pricetablesection}  pt-50 pb-50`}>
        <div className="container">
          <h2 className="text_center  heading2 text_primary mb-50">
            Price Table
          </h2>

          <div className={style.priceplan}>
            <div className={style.text}>Monthly</div>
            <label className={style.switch}>
              <input type="checkbox" />
              <span className={`${style.slider} ${style.round}`}></span>
            </label>
            <div className={style.text}>Yearly</div>
          </div>

          <div className="row">
            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.imagewithtext}>
                  <div className={style.image}>
                    <Briefcaseline />
                  </div>
                  <div className={style.text}>Lite</div>
                </div>
                <div className={style.sug}>Perfect to get Startes</div>

                <div className={style.price}>
                  <div className={style.plan}>
                    <span>$</span> 11{" "}
                  </div>
                  <div className={style.amount}> per seat/month</div>
                </div>

                <Button theme="secondry">Try 7 days for free</Button>

                <div className={style.content}>
                  <h4> Lite Includes:</h4>
                  <ul>
                    <li>
                      <Checkfill /> 31 full user
                    </li>
                    <li>
                      <Checkfill /> 1000 Email Previews
                    </li>
                    <li>
                      <Checkfill /> 5 Contacts per Clints
                    </li>
                    <li>
                      <Checkfill /> 5 Coffee Cips
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className={style.callbtn}>
                <Link href="index">See All Features</Link>
              </div> */}
            </div>

            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.imagewithtext}>
                  <div className={style.image}>
                    <Briefcaseline />
                  </div>
                  <div className={style.text}>Pro</div>
                </div>
                <div className={style.sug}>Toolset for hard players</div>

                <div className={style.price}>
                  <div className={style.plan}>
                    <span>$</span> 19{" "}
                  </div>
                  <div className={style.amount}> per seat/month</div>
                </div>

                <Button theme="secondry">Set Started</Button>

                <div className={style.content}>
                  <h4>Everything in lite, plus:</h4>
                  <ul>
                    <li>
                      <Checkfill /> 31 full user
                    </li>
                    <li>
                      <Checkfill /> 1000 Email Previews
                    </li>
                    <li>
                      <Checkfill /> 5 Contacts per Clints
                    </li>
                    <li>
                      <Checkfill /> 5 Coffee Cips
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className={style.callbtn}>
                <Link href="index">See All Features</Link>
              </div> */}
            </div>
            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.imagewithtext}>
                  <div className={style.image}>
                    <Flashlightline />
                  </div>
                  <div className={style.text}>Ultimate</div>
                </div>
                <div className={style.sug}>Best for professionals</div>

                <div className={style.price}>
                  <div className={style.plan}>
                    <span>$</span> 35{" "}
                  </div>
                  <div className={style.amount}> per seat/month</div>
                </div>

                <Button theme="secondry">Set Started</Button>

                <div className={style.content}>
                  <h4> Everything in lite, plus:</h4>
                  <ul>
                    <li>
                      <Checkfill /> 31 full user
                    </li>
                    <li>
                      <Checkfill /> 1000 Email Previews
                    </li>
                    <li>
                      <Checkfill /> 5 Contacts per Clints
                    </li>
                    <li>
                      <Checkfill /> 5 Coffee Cips
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className={style.callbtn}>
                <Link href="index">See All Features</Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="getinquery bg_primary pt-50 pb-50 ">
        <div className="container">
          <h2 className="text_center  heading2 text_graydark mb-50">
            Inquiry Now
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
