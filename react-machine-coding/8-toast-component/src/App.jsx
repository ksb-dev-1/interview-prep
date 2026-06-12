import React, { useState } from "react";
import Toast from "./components/Toast";

const positions = ["top-right", "top-left", "bottom-right", "bottom-left"];

function App() {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("top-right");

  const showToast = (type, message) => {
    const id = Date.now();
    const newToast = { id, type, message, position };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="app">
      <h1>Toast Notifications</h1>

      <div className="position-select">
        <label htmlFor="position">Select Position:</label>
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div className="card-container">
        <div
          className="card card-info"
          onClick={() => showToast("info", "This is an info message")}
        >
          Info
        </div>
        <div
          className="card card-success"
          onClick={() => showToast("success", "Success! Operation completed")}
        >
          Success
        </div>
        <div
          className="card card-warning"
          onClick={() =>
            showToast("warning", "Warning: Something might be wrong")
          }
        >
          Warning
        </div>
        <div
          className="card card-error"
          onClick={() => showToast("error", "Error! Something went wrong")}
        >
          Error
        </div>
      </div>

      {positions.map((pos) => (
        <div key={pos} className={`toast-container ${pos}`}>
          {toasts
            .filter((toast) => toast.position === pos)
            .reverse()
            .map((toast) => (
              <Toast
                key={toast.id}
                type={toast.type}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
