/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "components/button";
import style from "styles/home.module.scss";
import Options from "constant";
import { useRouter } from "next/router";
import ArrowRight from "lib/icons/ArrowRight";
import ArrowLeft from "lib/icons/ArrowLeft";

const GenderArray = [
  {
    id: 0,
    value: "Male",
  },
  {
    id: 1,
    value: "Female",
  },
  {
    id: 2,
    value: "Other",
  },
];

const HeroSection = () => {
  const router = useRouter();

  const [state, setState] = React.useState({
    name: "",
    age: "",
    gender: "",
    course: "",
  });

  const updateState = React.useCallback(
    (key: string, value: string) => {
      setState({
        ...state,
        [key]: value,
      });
    },
    [state]
  );

  const contentArray = React.useMemo(
    () => [
      {
        id: 0,
        value: "name",
        question: "What is your name?",
      },
      {
        id: 1,
        value: "age",
        question: "What is your age?",
      },
      {
        id: 2,
        value: "gender",
        question: "What is your gender?",
      },
      {
        id: 3,
        value: "course",
        question: "Which type of course you want to learn?",
      },
    ],
    []
  );

  const [counter, setCounter] = React.useState(0);

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (counter < contentArray.length - 1) {
        setCounter((i) => i + 1);
      }
      if (counter === 3) {
        if (state.course === "SSC") {
          router.push("/onboarding/ssc");
        } else {
          router.push("/onboarding/welcome");
        }
      }
    },
    [contentArray.length, counter, router, state.course]
  );

  const onPrevious = React.useCallback(() => {
    if (counter > 0) {
      setCounter((i) => i - 1);
    }
  }, [counter]);

  console.log(state);
  console.log(counter);
  const RenderComponent = React.useMemo(() => {
    const count = contentArray.find((item) => item.id === counter);
    switch (count?.value) {
      case "name":
        return (
          <input
            type="text"
            placeholder="TYPE YOUR NAME...."
            onChange={(e) => updateState("name", e.target.value)}
            value={state.name}
          />
        );
      case "age":
        return (
          <input
            type="number"
            placeholder="TYPE YOUR AGE...."
            onChange={(e) => updateState("age", e.target.value)}
            value={state.age}
          />
        );
      case "gender":
        return (
          <div className="row p-20">
            {GenderArray.map((item, index) => (
              <div key={index} className="vts-4">
                <Button
                  type="button"
                  theme={item.value === state.gender ? "secondry" : "primary"}
                  onClick={() => updateState("gender", item.value)}
                >
                  {item.value}
                </Button>
              </div>
            ))}
          </div>
        );
      case "course":
        return (
          <div
            style={{
              gap: "10px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              paddingBottom: "10px",
            }}
          >
            {Options.map((item, index) => (
              <div key={index}>
                <Button
                  type="button"
                  theme={item.title === state.course ? "secondry" : "primary"}
                  onClick={() => updateState("course", item.title)}
                >
                  {item.title}
                </Button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    contentArray,
    counter,
    state.age,
    state.course,
    state.gender,
    state.name,
  ]);

  return (
    <section className={style.banersection}>
      <div className="container">
        <div className="row">
          <div className="vts-5">
            <div className="bannercontent">
              <h1>The best way to learn</h1>
              {/* <h2>What is Your Name?</h2> */}
              <h2>{contentArray[counter].question}</h2>
            </div>
            <form className={style.bannerform} onSubmit={onSubmit}>
              {RenderComponent}
              <div className="buttonaction row">
                <div className="vts-2">
                  <Button theme="secondry" type="button" onClick={onPrevious}>
                    <ArrowLeft />
                  </Button>
                </div>
                <div className="vts-2">
                  <Button theme="secondry" type="submit">
                    <ArrowRight />
                  </Button>
                </div>
                <div className="vts-4">
                  <Button
                    type="button"
                    theme="primary"
                    onClick={() => router.push("/onboarding/welcome")}
                  >
                    Skip
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="vts-7">
            <img
              src="/images/33.png"
              width={400}
              height={385}
              alt="bannerimage"
              className={style.bannerimage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

// interface StateTypes {
//   value: string;
// }

// interface InputComponentProps {
//   value: StateTypes;
//   onSelected: (value: StateTypes) => void;
// }

// const InputComponent = ({ onSelected }: InputComponentProps) => {
//   const [state, setState] = React.useState({
//     value: "",
//   });

//   const onChange = React.useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setState({
//         ...state,
//         value: e.target.value,
//       });
//     },
//     [state]
//   );

//   const onSubmit = React.useCallback(
//     (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       if (onSelected) {
//         onSelected(state);
//       }
//     },
//     [state]
//   );

//   return (
//     <form className={style.bannerform} onSubmit={onSubmit}>
//       <input type="text" onChange={onChange} placeholder="TYPE YOUR NAME...." />
//       <div className="buttonaction row">
//         <div className="vts-8">
//           <Button theme="secondry" type="submit">
//             continue
//           </Button>
//         </div>
//         <div className="vts-4">
//           <Button type="button" theme="primary">
//             Skip
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };

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

/**
 * name
 * age
 * gender
 * category
 */
// const onContinue = React.useCallback(
//   (value: string) => {
//     const draft = [...boardingState.list];
//     draft.map((item, index) => {
//       if (item.id === boardingState.selected) {
//         draft[index].answer = value;
//       }
//     });

//     setBoarding({
//       ...boardingState,
//       list: draft,
//     });
//   },
//   [boardingState]
// );
