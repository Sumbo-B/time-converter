import { useState } from "react";

function TimeConverter() {
  const [timeStr, setTimeStr] = useState("");
  const [result, setResult] = useState("");

  const convertToTotalMinutes = (timeStr) => {
    const timeParts = timeStr.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);
    const totalMinutes = hours * 60 + minutes + seconds / 60;
    return totalMinutes.toFixed(2);
  };

  const convertToTotalHours = (timeStr) => {
    const timeParts = timeStr.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);
    const totalHours = hours + minutes / 60 + seconds / 3600;
    return totalHours.toFixed(2);
  };

  const handleConvertToMinutes = () => {
    setResult(convertToTotalMinutes(timeStr));
  };

  const handleConvertToHours = () => {
    setResult(convertToTotalHours(timeStr));
  };

  return (
    <div>
      <h1>Time Converter</h1>
      <input
        type="text"
        value={timeStr}
        onChange={(e) => setTimeStr(e.target.value)}
        placeholder="HH:MM:SS"
      />
      <div>
        <button onClick={handleConvertToMinutes}>
          Convert to Total Minutes
        </button>
        <button onClick={handleConvertToHours}>Convert to Total Hours</button>
      </div>
      {result && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default TimeConverter;
