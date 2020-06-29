import React from "react";
import "./Form.css";
const Form = (props) => {
  return (
    <form>
      <h2>Enter the name of city</h2>
      <input
        type="text"
        placeholder="City name"
        value={props.value}
        onChange={props.change}
      />
    </form>
  );
};

export default Form;
