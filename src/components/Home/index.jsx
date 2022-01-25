import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-20">
      <button
        className="bg-gray-400 hover:bg-gray-300 text-white text-4xl px-3 py-2 rounded"
        onClick={() => navigate("/quiz")}
      >
        Start Quiz!
      </button>
    </div>
  );
}

export default Home;
