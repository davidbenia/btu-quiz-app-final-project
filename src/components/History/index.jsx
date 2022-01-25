import React, { useState, useEffect } from "react";

function History() {
  const [hist, setHist] = useState(null);

  useEffect(() => {
    let getHist = JSON.parse(localStorage.getItem("attempts"));

    if (getHist) {
      setHist(getHist.sort().reverse());
    }
  }, []);

  if (hist) {
    return (
      <div className="flex justify-center">
        <div className="bg-gray-500 w-4/5 mt-10 rounded-md p-2 grid gap-y-5 text-white text-3xl">
          {hist.map((item, idx) => (
            <div key={idx}>
              <div>Score: {item.score}</div>

              <div>Date: {Date(Date.parse(item.date))}</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else return null;
}

export default History;
