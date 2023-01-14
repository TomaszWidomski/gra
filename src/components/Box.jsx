import React from "react";
import "../index.css";

function Box(props) {
  return (
    <button
      id={props.id}
      className="box-active"
      onClick={props.changeTic}
      disabled={props.active}
    >
      <div className={props.remark}>{props.remark} </div>
    </button>
  );
}

export default Box;
