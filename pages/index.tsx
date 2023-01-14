/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "components/button";
import PerPageLayout from "layout/perpage";
import style from "styles/home.module.scss";
import HeroSection from "components/home/hero";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
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
