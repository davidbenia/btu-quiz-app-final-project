import React, { useState } from "react";

function Single(props) {
  const [btnStyle, setBtnStyle] = useState(null);
  const [selected, setSelected] = useState({
    idx: null,
    value: null,
  });
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  let answerOptions = props.options;

  const handleSelect = (event, index) => {
    setSelected({
      idx: index,
      value: event.target.value,
    });
  };

  const checkAnswer = () => {
    setSelectedAnswer(true);

    if (selected.value == props.answer) {
      setBtnStyle("green");
      props.method2();
    } else {
      setBtnStyle("red");
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
              type="radio"
              checked={selected.idx == idx}
              value={parseInt(item.slice(-1))}
              onChange={(e) => handleSelect(e, idx)}
            />
            <label htmlFor={idx}>{item}</label>
          </div>
        ))}
      </div>

      {selectedAnswer ? (
        <button
          className="text-3xl text-white p-1 px-2 rounded mt-5"
          onClick={props.method1}
          style={{ backgroundColor: btnStyle }}
        >
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

export default Single;
