import React, { useState } from "react";

function Bool(props) {
  const [selected, setSelected] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  const checkAnswer = () => {
    setSelectedAnswer(true);

    if (selected == props.answer.toString()) {
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

export default Bool;
