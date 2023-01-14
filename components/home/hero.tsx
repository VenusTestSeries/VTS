/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "components/button";
import style from "styles/home.module.scss";
import UUID from "lib/uuid";

const HeroSection = () => {
  const state = {
    selected: "9e7a",
    list: [
      {
        id: "9e7a",
        question: "What is your name?",
        answer: "",
      },
      {
        id: "4908",
        question: "Question 2",
        answer: "",
      },
      {
        id: "d4bd",
        question: "Question 3",
        answer: "",
      },
      {
        id: "729f",
        question: "Question 4",
        answer: "",
      },
    ],
  };
  const [boardingState, setBoarding] = React.useState(state);

  const onContinue = React.useCallback(
    (value: string) => {
      const draft = [...boardingState.list];
      draft.map((item, index) => {
        if (item.id === boardingState.selected) {
          draft[index].answer = value;
        }
      });

      setBoarding({
        ...boardingState,
        list: draft,
      });
    },
    [boardingState]
  );

  console.log(boardingState);

  // const Hello=React.useMemo(()=>{

  //   switch ('key') {
  //     case 'value':

  //     default:
  //       break;
  //   }
  // },[])
  return (
    <section className={style.banersection}>
      <div className="container">
        <div className="row">
          <div className="vts-5">
            <div className="bannercontent">
              <h1>The best way to learn to code</h1>
              <h2>What is Your Name?</h2>
            </div>
            <InputComponent
              value={{ value: "" }}
              onSelected={(data) => onContinue(data.value)}
            />
          </div>
          <div className="vts-7">
            <img
              src="/images/bannerimage.png"
              width={500}
              height={333}
              alt="bannerimage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

interface StateTypes {
  value: string;
}

interface InputComponentProps {
  value: StateTypes;
  onSelected: (value: StateTypes) => void;
}

const InputComponent = ({ onSelected }: InputComponentProps) => {
  const [state, setState] = React.useState({
    value: "",
  });

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        value: e.target.value,
      });
    },
    [state]
  );

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onSelected) {
        onSelected(state);
      }
    },
    [state]
  );

  const onSkip = React.useCallback(() => {}, []);

  // React.useEffect(() => {
  //   if (onSelected) {
  //     onSelected(state);
  //   }
  // }, [state]);
  return (
    <form className={style.bannerform} onSubmit={onSubmit}>
      <input type="text" onChange={onChange} placeholder="TYPE YOUR NAME...." />
      <div className="buttonaction row">
        <div className="vts-8">
          <Button theme="secondry" type="submit">
            continue
          </Button>
        </div>
        <div className="vts-4">
          <Button type="button" theme="primary" onClick={onSkip}>
            Skip
          </Button>
        </div>
      </div>
    </form>
  );
};

// const onContinue = React.useCallback(() => {
//   if (inputRef.current) {
//     const value = inputRef.current.value;
//     if (value) {
//       const draft = [...onBoarding.list];
//       draft.push({
//         question: "What is your name?",
//         answer: value,
//       });
//       setOnBoarding({
//         ...onBoarding,
//         list: draft,
//       });
//     }
//   }
// }, [onBoarding]);

// const onSkip = React.useCallback(() => {
//   setOnBoarding((prev) => {
//     return {
//       ...prev,
//       selected: {
//         ...prev.selected,
//         [prev.list[0].question]: "",
//       },
//     };
//   });
// }, []);

// console.log(onBoarding);

// const draft=boardingState.list.filter((item) => item.id === boardingState.selected);
// draft.find((item) => item.id === boardingState.selected)?.answer;
