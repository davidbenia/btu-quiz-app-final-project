import React from "react";

function Bool(props) {
  return (
    <div>
      {props.question}
      {props.answer}
      <button className="text-3xl text-red-500" onClick={props.method}>
        test
      </button>
    </div>
  );
}

export default Bool;
