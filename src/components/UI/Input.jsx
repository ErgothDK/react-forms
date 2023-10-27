import React from "react";

const Input = ({ ...props }) => {
  return (
    <div className="control no-margin">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type ?? "text"}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
      <div className="control-error">{props.error && <p>{props.error}</p>}</div>
    </div>
  );
};

export default Input;
