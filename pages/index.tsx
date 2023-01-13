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

      <section>
        <div className="container">
          <h2>Why VTS</h2>
          <div className="row">
            <div className="vts-4">
              <div className="boxdesign1">
                <div className="image">
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
    </div>
  );
}

export default Home;

Home.perpage = PerPageLayout;
