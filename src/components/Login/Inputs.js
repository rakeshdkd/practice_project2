import React from "react";

const Inputs = (props) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props.children}
      </input>
    </div>
  );
};

export default Inputs;
