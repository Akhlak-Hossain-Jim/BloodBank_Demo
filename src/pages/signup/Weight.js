import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export default function Weight({ WeightVal, setWeightVal, cta }) {
  const Options = [
    {
      value: ">50",
      image: "/image/weight.webp",
      icon: <ArrowDownwardIcon className="top_arrow" />,
    },
    {
      value: "<50",
      image: "/image/weight.webp",
      icon: <ArrowUpwardIcon className="top_arrow" />,
    },
  ];
  return (
    <div className="form">
      <h1>How Much Do You Weight</h1>
      <div className="weights">
        {React.Children.toArray(
          Options.map((option) => (
            <div
              className={`weight ${option.value === WeightVal ? "active" : ""}`}
              id="option-1"
              onClick={() => setWeightVal(option.value)}
            >
              {option.icon}
              <img src={option.image} alt={option.value} />
              <p>{option.value} KG</p>
            </div>
          ))
        )}
      </div>
      <button
        className="c_width"
        onClick={() => cta(4)}
        disabled={!WeightVal ? true : false}
      >
        Next
      </button>
    </div>
  );
}
