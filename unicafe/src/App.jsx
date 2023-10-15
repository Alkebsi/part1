import { useState } from 'react';

const Statistics = (props) => {
  return (
    <p>
      {props.text} {props.value} {props.extra}
    </p>
  );
};

const DisplayStatistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <Statistics text="good" value={props.good} />
      <Statistics text="neutral" value={props.neutral} />
      <Statistics text="bad" value={props.bad} />
      <Statistics text="all" value={props.all} />
      <Statistics text="average" value={props.average} />
      <Statistics text="positive" value={props.positive} extra="%" />
    </>
  );
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
      <DisplayStatistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  );
};

export default App;
