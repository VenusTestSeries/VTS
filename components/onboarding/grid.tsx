import React from "react";
import css from "styles/onboarding.module.scss";

interface OptionsProps {
  title: string;
  icon: JSX.Element;
}

interface GridItemsProps {
  value: string;
  items: OptionsProps[];
  onSelect: (value: string) => void;
}

const GridItems = ({ items, onSelect }: GridItemsProps) => {
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);
  return (
    <div className={css["grid"]}>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`${css["items"]} ${
              selected === item.title ? css["active"] : ""
            }`}
            onClick={() => setSelected(item.title)}
          >
            <span>{item.icon}</span>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default GridItems;
