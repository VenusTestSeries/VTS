/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Button from "components/button";
import PerPageLayout from "layout/perpage";
import React from "react";
import style from "../styles/home.module.scss";

function Home() {
  return (
    <React.Fragment>
      <section className={style.banersection}>
        <div className="container">
          <div className="row">
            <div className="vts-5">
              <div className="bannercontent">
                <h1>The best way to learn to code</h1>
                <h2>What is Your Name</h2>
                <div className={style.bannerform}>
                  <input type="text" placeholder="TYPE YOUR NAME...." />
                  <div className="buttonaction row">
                    <div className="vts-8">
                      <Button theme="secondry">continue</Button>
                    </div>
                    <div className="vts-4">
                      <Button theme="primary">Skip</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vts-7">
              <img
                src="/images/bannerimage.png"
                width={500}
                height={333}
                alt=""
              />
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
                <h3>It s Popular</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign1}>
                <div className={style.image}>
                  <img src="/svg/popular.svg" alt="" />
                </div>
                <h3>It s Popular</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign1}>
                <div className={style.image}>
                  <img src="/svg/popular.svg" alt="" />
                </div>
                <h3>It s Popular</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.awardsection} pt-50 pb-50`}>
        <div className="container">
          <h2 className="text_center heading2 text_skyblue">
            The problems every governemt job aspirant faces
          </h2>
          <div className="row mt-50">
            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.boxdesign2}>
                <div className={style.image}>
                  <img src="/svg/winner1.svg" alt="" />
                </div>
                <div className={style.text}>
                  <p>
                    The Questions of The most Test Series platform are
                    irrelevant either Too Difficult or Too Easy{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.callbtn}>
            <Button theme="secondry">Call To Action</Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;

Home.perpage = PerPageLayout;
