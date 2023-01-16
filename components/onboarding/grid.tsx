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

const GridItems = ({ value, items, onSelect }: GridItemsProps) => {
  const [selected, setSelected] = React.useState(value);

  React.useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
