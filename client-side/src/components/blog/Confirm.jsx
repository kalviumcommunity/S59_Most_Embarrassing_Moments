import React from "react";

const Confirm = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div className="parent-confirm">
      <div className="confirm">
      <p>{message}</p>
      <div>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Confirm;
