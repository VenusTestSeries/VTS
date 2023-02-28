import React from "react";
import styles from "./line.module.scss";

interface LineProgressProps {
  variant?: "success" | "info" | "warning" | "danger";
  percentage?: number;
}

const LineProgress = ({ variant, percentage = 0 }: LineProgressProps) => {
  const containerClassName = React.useMemo(() => {
    switch (variant) {
      case "info":
        return `${styles.container} ${styles["info"]}`;
      case "warning":
        return `${styles.container} ${styles["warning"]}`;
      case "danger":
        return `${styles.container} ${styles["danger"]}`;
      default:
        return `${styles.container} ${styles["success"]}`;
    }
  }, [variant]);
  const lineClassName = React.useMemo(() => {
    switch (variant) {
      case "info":
        return `${styles.line} ${styles["line-info"]}`;
      case "warning":
        return `${styles.line} ${styles["line-warning"]}`;
      case "danger":
        return `${styles.line} ${styles["line-danger"]}`;
      default:
        return `${styles.line} ${styles["line-success"]}`;
    }
  }, [variant]);
  return (
    <div className={containerClassName}>
      <div className={lineClassName} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default LineProgress;
