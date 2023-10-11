import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const wordCount = state.split(/\s+/).filter(Boolean).length;
  const handleInput = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="App">
      <h4>Responsive Paragraph Word Counter</h4>
      <textarea
        placeholder="Text Input"
        onChange={handleInput}
        value={state}
      ></textarea>
      <p className="wc">
        Word Count: <span className="num">{wordCount}</span>{" "}
      </p>
      <p>Chillara V L N S Pavana Vamsi</p>
    </div>
  );
}

export default App;
