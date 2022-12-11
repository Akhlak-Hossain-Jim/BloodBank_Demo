import React from "react";

export default function Gender({ GenderV, setGenderV, cta }) {
  const Options = [
    {
      title: "Male",
      value: "male",
      image: `/image/male.svg`,
    },
    {
      title: "Female",
      value: "female",
      image: `/image/female.svg`,
    },
  ];
  return (
    <div className="form">
      <h1>Let Us Know Your Gender</h1>
      <div className="genders grid_parent grid_twoCol">
        {React.Children.toArray(
          Options.map((option) => (
            <div
              className={`gender ${option.value === GenderV ? "active" : ""}`}
              onClick={() => setGenderV(option.value)}
            >
              <img src={option.image} alt={`${option.title} icon`} />
              <p>{option.title}</p>
            </div>
          ))
        )}
      </div>
      <button
        className="c_width"
        onClick={() => cta(5)}
        disabled={!GenderV ? true : false}
      >
        Next
      </button>
    </div>
  );
}
