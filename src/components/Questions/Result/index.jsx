import React from "react";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const navigate = useNavigate();

  const process = () => {
    props.method();

    navigate("/");
  };

  return (
    <>
      <button className="text-3xl text-red-500" onClick={process}>
        test
      </button>
    </>
  );
}

export default Result;
