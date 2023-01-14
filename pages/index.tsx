/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import StarIcon from "lib/icons/star";
import Button from "components/button";
import PerPageLayout from "layout/perpage";
import style from "../styles/home.module.scss";

function Home() {
  return (
    <div>
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
          <h2 className="text_center  heading2 text_primary">Testimonials</h2>
          <p className="font_size18 text_center font-w600 text_skyblue">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </p>

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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                </div>
              </div>
            </div>
          </div>
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

          <div className="row justfiy_content_center">
            <div className="vts-10">
              <div className={style.testimonialsoneslider}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
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

      <section className="pt-50 pb-50">
        <div className="container">
          <h2 className="text_center  heading2 text_primary mb-50">
            Price Table
          </h2>
          <div className="row">
            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.price}>
                  <div className={style.plan}>BASIC </div>
                  <div className={style.amount}>Rs.29</div>
                </div>
                <div className={style.content}>
                  <ul>
                    <li>31 full user</li>
                    <li>1000 Email Previews</li>
                    <li>5 Contacts per Clints</li>
                    <li>5 Coffee Cips</li>
                  </ul>
                </div>

                <div className={style.callbtn}>
                  <Button theme="secondry">BUY NOW</Button>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.price}>
                  <div className={style.plan}>BASIC </div>
                  <div className={style.amount}>Rs.29</div>
                </div>
                <div className={style.content}>
                  <ul>
                    <li>31 full user</li>
                    <li>1000 Email Previews</li>
                    <li>5 Contacts per Clints</li>
                    <li>5 Coffee Cips</li>
                  </ul>
                </div>

                <div className={style.callbtn}>
                  <Button theme="secondry">BUY NOW</Button>
                </div>
              </div>
            </div>

            <div className="vts-4">
              <div className={style.pricetable}>
                <div className={style.price}>
                  <div className={style.plan}>BASIC </div>
                  <div className={style.amount}>Rs.29</div>
                </div>
                <div className={style.content}>
                  <ul>
                    <li>31 full user</li>
                    <li>1000 Email Previews</li>
                    <li>5 Contacts per Clints</li>
                    <li>5 Coffee Cips</li>
                  </ul>
                </div>

                <div className={style.callbtn}>
                  <Button theme="secondry">BUY NOW</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="getinquery pt-50 pb-50 ">
        <div className="container">
          <div className="row">
            <div className="vts-6">
              <div className="getinquerybox">
                <div className="row">
                  <div className="vts-6">
                    <div className="inputbox">
                      <label htmlFor=""></label>
                    </div>
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
