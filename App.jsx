import { useState } from "react";
import "./App.css";

function App() {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("green");

  const increaseTemp = () => {
    const newTemp = tempValue + 1;

    setTempValue(newTemp);

    if (newTemp > 0 && newTemp < 15) {
      setTempColor("green");
    }

    if (newTemp >= 15 && newTemp < 30) {
      setTempColor("yellow");
    }

    if (newTemp >= 30) {
      setTempColor("red");
    }
  };

  const decreaseTemp = () => {
    const newTemp = tempValue - 1;

    setTempValue(newTemp);

    if (newTemp <= 0) {
      setTempColor("blue");
    }

    if (newTemp > 0 && newTemp < 15) {
      setTempColor("green");
    }

    if (newTemp >= 15 && newTemp < 30) {
      setTempColor("yellow");
    }

    if (newTemp >= 30) {
      setTempColor("red");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className={`temperature ${tempColor}`}>{tempValue}°C</div>

        <div className="control-container">
          <div className="controller plus" onClick={() => increaseTemp()}>
            +
          </div>
          <div className="controller minus" onClick={() => decreaseTemp()}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
