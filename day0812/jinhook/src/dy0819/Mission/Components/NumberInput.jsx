import React, { useRef, useEffect } from "react";
import "./NumberInput.css";

function NumberInput(props) {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.count < 10) {
      props.setCount(props.count + 1);
    }
  };

  const handleInputChange = (event) => {
    props.setNumber(event.target.value);
  };

  return (
    <div className="NumberInputWrapper">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          type="number"
          min={1}
          max={100}
          value={props.number}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={props.success}>
          정답
        </button>
      </form>
    </div>
  );
}

export default NumberInput;
