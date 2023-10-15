import { useState } from 'react';

const Statistics = (props) => {
  return <p>{props.text} {props.value} {props.extra}</p>
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  // Show more statistics about the gathered feedback
  const average = (1 / all) * (good - bad);
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>

      <button
        onClick={() => {
          setGood(good + 1);
          setAll(all + 1);
        }}
      >
        good
      </button>

      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
        }}
      >
        neutral
      </button>

      <button
        onClick={() => {
          setBad(bad + 1);
          setAll(all + 1);
        }}
      >
        bad
      </button>

      <h1>statistics</h1>

      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive} extra="%" />
    </div>
  );
};

export default App;
