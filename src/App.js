import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    wordCount: 0,
  });
  const handleInput = (e) => {
    let string = e.target.value;
    let c = 0;
    let string1 = string.split(" ");
    for (let index = 0; index < string1.length; index++) {
      if (string.length === 0) {
        setState({
          wordCount: 0,
        });
      }
      if (string1[index] !== " " && string1[index].length > 0) {
        c++;
      }
      setState({ wordCount: c });
    }
  };
  return (
    <div className="App">
      <h4>Responsive Paragraph Word Counter</h4>
      <textarea
        rows="10"
        cols="50"
        placeholder="Text Input"
        onChange={handleInput}
      ></textarea>
      <p className="wc">
        Word Count: <span className="num">{state.wordCount}</span>{" "}
      </p>
      <p>Chillara V L N S Pavana Vamsi</p>
    </div>
  );
}

export default App;
