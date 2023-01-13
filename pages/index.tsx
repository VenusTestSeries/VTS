import Button from "components/button";
import poppins from "font/poppins";
import PerPageLayout from "layout/perpage";
import style from "../styles/home.module.scss";
import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
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
                align="right"
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

      <section className="">
        <div className="container">
          <h2 className="text_center heading2 text_skyblue">Our Partner</h2>
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
                <h2 className="  heading2 text_skyblue">
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
                  <br /> It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
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
