import React from "react";
import Button from "components/button";
import pricingData from "constant/pricing";
import Briefcaseline from "lib/icons/Briefcaseline";
import Checkfill from "lib/icons/Checkfill";
import CloseIcon from "lib/icons/CloseIcon";
import style from "styles/home.module.scss";

const PricingSection = () => {
  const [togglePrice, setTogglePrice] = React.useState(false);

  console.log(togglePrice);
  return (
    <section className={`${style.pricetablesection}  pt-50 pb-50`}>
      <div className="container">
        <h2 className="text_center  heading2 text_primary mb-50">
          Price Table
        </h2>
        <div className={style.priceplan}>
          <div className={style.text}>Monthly</div>
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={togglePrice}
              onChange={({ target }) => setTogglePrice(target.checked)}
            />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
          <div className={style.text}>Yearly</div>
        </div>

        <div className="row">
          {pricingData.map((data, index) => (
            <div className="vts-4" key={index}>
              <div className={style.pricetable}>
                <div className={style.imagewithtext}>
                  <div className={style.image}>
                    <Briefcaseline />
                  </div>
                  <div className={style.text}>{data.planName}</div>
                </div>
                <div className={style.sug}>Perfect to get Startes</div>

                <div className={style.price}>
                  <div className={style.plan}>
                    <span>₹</span>
                    {togglePrice ? data.price.yearly : data.price.monthly}
                  </div>
                  {/* <div className={style.amount}> per seat/month</div> */}
                  <div className={style.amount}>
                    {data.price.monthly === 0
                      ? "for lifetime"
                      : togglePrice
                      ? "for yearly"
                      : "for monthly"}
                    {/* for lifetime */}
                  </div>
                </div>

                <Button theme="secondry">Try for free</Button>

                <div className={style.content}>
                  <h4> Lite Includes:</h4>
                  <ul>
                    {data.list.map((a, i) => (
                      <li key={i}>
                        {a.access ? (
                          <Checkfill />
                        ) : (
                          <CloseIcon color="#c0392b" />
                        )}
                        {a.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
