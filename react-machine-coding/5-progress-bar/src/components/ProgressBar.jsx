import { useState, useEffect } from "react";

export default function ProgressBar({ progress }) {
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedProgress(progress);
    }, 100); // Give time for initial render
    return () => clearTimeout(timeout);
  }, [progress]);

  // Choose color based on progress
  let bgColor = "#ef4444"; // Red
  let color = "#fff";

  if (progress >= 80) {
    bgColor = "#22c55e"; // Green
    color = "#fff";
  } else if (progress >= 50) {
    bgColor = "#facc15"; // Yellow
    color = "#000";
  } else if (progress >= 20) {
    bgColor = "#f97316"; // Orange
    color = "#fff";
  }

  return (
    <div className="progress-bar__container">
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{
            //width: `${displayedProgress}%`,
            transform: `translateX(${displayedProgress - 100}%)`,
            backgroundColor: bgColor,
            color: color,
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
