import { useState } from "react";
export default function Questions({ data }) {
  const [display, setdisplay] = useState(false);

  const answer = () => {
    setdisplay((tru) => !tru);
  };

  return (
    <div onClick={answer} className="main">
      {display ? (
        <div className="card">
          <h2>{data.ans}</h2>
        </div>
      ) : (
        <div className="card">
          <h2>{data.question}</h2>
        </div>
      )}
    </div>
  );
}
