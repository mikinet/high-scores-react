import React from "react";

const SortController = (props) => {
  console.log(props.caption)
  return (
    <div className="sort-order-controller">
      <label for={props.caption}>{props.label}</label>
      <button className="button" onClick={props.onClick}>
        {props.caption}
      </button>
    </div>
  );
};
export default SortController;
