import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const attempts = () => {
    props.method();

    navigate("/history");
    setOpen(false);
  };

  const process = () => {
    props.method();

    navigate("/");
    setOpen(false);
  };

  const saveAttempt = () => {
    let setTime = new Date();
    let result = {
      date: `${setTime.toDateString()} ${setTime.toLocaleTimeString()}`,
      score: `${props.data.correct}/${props.data.total}`,
    };

    let attemptHistory = localStorage.getItem("attempts");
    let temp;

    if (attemptHistory) {
      temp = JSON.parse(attemptHistory);
      temp.push(result);
      localStorage.setItem("attempts", JSON.stringify(temp));
    } else {
      localStorage.setItem("attempts", JSON.stringify([result]));
    }

    process();
  };

  return (
    <div>
      {open && (
        <div className="flex justify-center">
          <div className="bg-green-400 p-2 rounded-md text-white text-4xl">
            <p>Do you want to save this attempt?</p>
            <div className="flex gap-x-10 justify-center">
              <button onClick={saveAttempt}>Yes</button>
              <button onClick={process}>No</button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-500 rounded-md p-2">
        <div className="text-white text-4xl text-center mb-20">
          Correct: {props.data.correct} / {props.data.total}
        </div>
        <div className="flex justify-center gap-x-20">
          <button className="text-3xl text-white" onClick={() => setOpen(true)}>
            Finish
          </button>
          <button className="text-3xl text-white" onClick={attempts}>
            See Attempts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
