/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import StarIcon from "lib/icons/star";
import Button from "components/button";
import style from "styles/home.module.scss";
import TestimonialSlider from "components/slider/testimonial";

const Testimonials = () => {
  return (
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
                        "VTS not only helped me prepare for SSC exams, but also
                        provided me with an interactive way to learn through
                        Quizzes and Playground. Competing with other students
                        made my learning experience more fun and engaging. I
                        highly recommend VTS to anyone looking to excel in SSC
                        exams."
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
                        thinking about highly competitive exams like SSC. I knew
                        I needed help but didn't know where to turn. That's when
                        I found VTS. The quality resources available on the
                        platform and its easy to use interface made my learning
                        journey so easy to excel in SSC exams. The Quizzes and
                        Playground feature made my learning experience more
                        interactive and fun. Thanks to VTS, I was able to
                        improve my test-taking performance and achieve my goals.
                        I am eternally grateful."
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
                        "I've tried other test-series platform in the past, but
                        none of them came close to the level of detail and
                        quality of VTS. I felt lack of quality in their tests ,
                        almost every test platform just copy and pasted previous
                        years questions. No real efforts were put into
                        preparring test. VTS , a quite new platform but quite
                        original in their contents . I highly recommend its
                        Test-Series over any other platform out there."
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
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
  );
};
export default Testimonials;
