import React from "react";
import Style from "../lineprogressbar/lineprogressbar.module.scss";
import LineProgress from "./line";

type LineProgressProps = React.ComponentProps<typeof LineProgress>;

type LineProgress = {} & LineProgressProps;

const LineProgressComponent = ({ percentage, variant }: LineProgress) => {
  return (
    <div>
      <div className={Style.promodebox}>
        <div className={Style.promode}>
          <div className={Style.modetext}>Easy</div>
          <div className={Style.modecount}>
            <span>143</span>/623
          </div>
        </div>
        <div className={Style.partext}>
          Beats <span> 960.5%</span>
        </div>
      </div>
      <LineProgress variant={variant} percentage={percentage} />
    </div>
  );
};

export default LineProgressComponent;
