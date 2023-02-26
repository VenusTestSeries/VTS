import React from "react";
import Style from "../lineprogressbar/lineprogressbar.module.scss";

type LineProgress = {
  percentage: number;
  background: string;
  activeColor: string;
  variant?: "success" | "info" | "warning" | "danger";
};

{
  /* <ProgressBar variant="success" now={40} />
<ProgressBar variant="info" now={20} />
<ProgressBar variant="warning" now={60} />
<ProgressBar variant="danger" now={80} /> */
}
const LineProgress = ({
  activeColor,
  background,
  percentage,
  variant,
}: LineProgress) => {
  const VarientThemes = React.useMemo(() => {
    switch (variant) {
      case "success":
        return ``;
      default:
        return "lineprogressbar";
    }
  }, [variant]);
  return (
    <div className={`${VarientThemes}`}>
      <div className={Style.promodebox}>
        <div className={Style.promode}>
          <div className={Style.modetext}>Easy</div>
          <div className={Style.modecount}>
            <span>143</span>/623
          </div>
        </div>
        <div className={Style.partext}>960.5%</div>
      </div>

      <div className={Style.progressbar}>
        <div className={`${Style.bar} ${Style.width50}   `}></div>
      </div>
    </div>
  );
};

export default LineProgress;
