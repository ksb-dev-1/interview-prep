import ProgressBar from "./comonents/ProgressBar";

export default function App() {
  const bars = [11, 26, 54, 85];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar progress={value} />
      ))}
    </div>
  );
}
