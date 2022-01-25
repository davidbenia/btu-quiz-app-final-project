import React, { useState } from "react";

function Multi(props) {
  const [selected, setSelected] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  let answerOptions = props.options;

  const handleSelect = (event, index) => {
    setSelected((prevSelected) => [
      ...prevSelected,
      {
        idx: index,
        value: parseInt(event.target.value),
      },
    ]);
  };

  const checkAnswer = () => {
    setSelectedAnswer(true);

    let answersSimplified = [];

    selected.forEach((item) => {
      answersSimplified.push(item.value);
    });

    if (
      answersSimplified.every((item) => [...props.answer].includes(item)) &&
      [...props.answer].every((item) => answersSimplified.includes(item))
    ) {
      props.method2();
    } else {
      console.log("wrong");
    }
  };

  return (
    <div className="flex-col bg-gray-500 rounded-md p-2">
      <div className="text-white text-4xl flex justify-center">
        {props.question}
      </div>

      <div className="text-white text-2xl">
        {answerOptions.map((item, idx) => (
          <div key={idx}>
            <input
              id={idx}
              name={`opt-${idx}`}
              type="checkbox"
              value={parseInt(item.slice(-1))}
              onChange={(e) => handleSelect(e, idx)}
            />
            <label htmlFor={idx}>{item}</label>
          </div>
        ))}
      </div>

      {selectedAnswer ? (
        <button className="text-3xl text-white" onClick={props.method1}>
          Next
        </button>
      ) : (
        <button className="text-3xl text-white" onClick={checkAnswer}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Multi;
