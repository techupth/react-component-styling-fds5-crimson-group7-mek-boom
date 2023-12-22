import { useState } from "react";
import Alert from "./components/Alert";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary" text="Button Du"></Button>
        <Button color="secondary" text="Button Frank"></Button>
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert color="red" text="This is error alert box"></Alert>
        <Alert color="orange" text="This is error alert box orange"></Alert>
        <Alert color="yellow" text="This is error alert box yellow"></Alert>
        <Alert color="green" text="This is error alert box green"></Alert>
      </div>
    </div>
  );
}

export default App;
