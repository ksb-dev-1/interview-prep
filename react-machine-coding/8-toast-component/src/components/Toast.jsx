import React from "react";
import "./Toast.css";

const Toast = ({ type = "info", message, onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
