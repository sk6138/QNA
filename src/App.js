import { useState } from "react";
import Questions from "./Questions";
import "./styles.css";

const data = [
  { id: 123, question: "what is react?", ans: "react is javascript library" },
  { id: 124, question: "what is react?", ans: "react is javascript library" },
  { id: 125, question: "what is react?", ans: "react is javascript library" },

  { id: 123, question: "what is react?", ans: "react is javascript library" },
  { id: 124, question: "what is react?", ans: "react is javascript library" },
  { id: 125, question: "what is react?", ans: "react is javascript library" },

  { id: 126, question: "what is react?", ans: "react is javascript library" },
];

export default function App() {
  return (
    <div className="App">
      <div className="card">
        {data.map((dat) => (
          <Questions data={dat} key={dat.id} />
        ))}
      </div>
    </div>
  );
}
