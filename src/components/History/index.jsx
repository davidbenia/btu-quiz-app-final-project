import React, { useState, useEffect, useRef } from "react";
import Context from "../Context";

function History() {
  const [hist, setHist] = useState(null);
  const itemRef = useRef();
  const [rightClicked, setRightClicked] = useState(false);

  const deleteItem = (item) => {
    if (hist) {
      let temp;

      temp = hist.filter((element) => element != item);

      setHist(temp.sort().reverse());
      localStorage.setItem("attempts", JSON.stringify(temp));
    }
  };

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
            <div
              key={idx}
              ref={itemRef}
              onContextMenu={(e) => {
                e.preventDefault();
                setRightClicked(e);
              }}
            >
              <div>Score: {item.score}</div>

              <div>Date: {Date(Date.parse(item.date))}</div>

              <Context
                parent={itemRef}
                rightClicked={rightClicked}
                item={item}
                method={deleteItem}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else return null;
}

export default History;
