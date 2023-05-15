import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, update, del }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={update} />
        <AiFillDelete className="icon" onClick={del} />
      </div>
    </div>
  );
};

export default ToDo;
