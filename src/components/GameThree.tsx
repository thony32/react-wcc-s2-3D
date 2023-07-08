import { useEffect, useState } from "react";

function getQuestion() {
  const min = 2;
  const max = 10;
  const answer = Math.floor(Math.random() * (max - min + 1) + min);
  return { answer, choices: [1, 2, 3, 4] };
}

function GameThree() {
  const [question, setQuestion] = useState({ choices: [] }) as any;
  const { answer, choices } = question as any;
  const [selected, setSelected] = useState([]) as any;
  const [result, setResult] = useState(null) as any;

  useEffect(() => {
    if (!result) setQuestion(getQuestion());
  }, [result]);

  function select(number: never) {
    setSelected([...selected, number]);
  }

  function deselect(number: never) {
    const index = selected.indexOf(number);
    if (index === -1) return;
    const newSelected = [...selected];
    newSelected.splice(index, 1);
    setSelected(newSelected);
  }

  function done() {
    const selectedTotal = selected.reduce((a: any, b: any) => a + b, 0);
    selectedTotal === answer
      ? setResult("correct!")
      : setResult("incorrect...");
  }

  function reset() {
    setSelected([]);
    setResult();
  }
  return (
    <div className="px-[10%] space-y-5">
      <div>
        <h1 className="fortnite text-7xl text-primary">Calculeoooo</h1>
      </div>
      <div className="">
        {result && (
            <div style={{ textAlign: "center" }}>
              <h1>{result}</h1>
              <button className="" onClick={reset}>
                Try again
              </button>
            </div>
        )}

        <div className="">
          Select numbers that add up to:
          <br />
          <span className="">{answer}</span>
        </div>

        <div className="">
          <div className="">
            {choices.map((number : never) => (
              <button
                key={number}
                className=""
                onClick={() => select(number)}
              >
                {number}
              </button>
            ))}
          </div>

          <div className="">
            {selected.map((number : never, index : any) => (
              <button
                key={index}
                className=""
                onClick={() => deselect(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        <div className="">
          <button className="" onClick={reset}>
            Reset
          </button>
          <button className="" onClick={done}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameThree