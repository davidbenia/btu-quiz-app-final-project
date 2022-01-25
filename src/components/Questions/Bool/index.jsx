import React, { useState } from "react";

function Bool(props) {
  const [btnStyle, setBtnStyle] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const checkAnswer = () => {
    setSelectedAnswer(true);

    if (selected == props.answer.toString()) {
      props.method2();
      setBtnStyle("green");
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
        <form>
          <input
            type="radio"
            value={true}
            id="true"
            name="boolean"
            onChange={(e) => handleSelect(e)}
          />
          <label htmlFor={"true"}>True</label>
          <input
            type="radio"
            value={false}
            id="false"
            name="boolean"
            onChange={(e) => handleSelect(e)}
          />
          <label htmlFor={"false"}>False</label>
        </form>
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

export default Bool;
