import React, { useState, useEffect } from "react";

function Context(props) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    props.method(props.item);
    setOpen(false);
  };

  useEffect(() => {
    props.rightClicked && setOpen(true);
  }, [props.rightClicked]);

  useEffect(() => {
    const hideMenu = (e) => {
      const parent = props.parent.current;

      if (parent && parent.contains(e.target)) {
        e.preventDefault();
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("click", hideMenu);

    return () => {
      window.removeEventListener("click", hideMenu);
    };
  });

  return (
    open && (
      <div className="context bg-red-400">
        <div className="buttonContainer">
          <button className="btn text-white text-3xl" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    )
  );
}

export default Context;
