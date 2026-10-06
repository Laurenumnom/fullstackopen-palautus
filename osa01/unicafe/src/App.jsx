import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState({positive:0, neutral:0, negative:0, total:0})

  return (
    <div>
      <Header />
      <Buttons feedback={feedback} setfeedback={setFeedback} />
      <Statistics feedback={feedback} />
    </div>
  )
}
export default App

const Header = () => (<header><h1>Give Feedback</h1></header>);

const Buttons = ({feedback, setfeedback}) => {
  return (
    <div className="feedbackButtons">
      <Button onClick={()=>addFeedback(setfeedback, feedback, 1)} emoji="👍" text="Positive" number={feedback.positive} />
      <Button onClick={()=>addFeedback(setfeedback, feedback, 0)} emoji="🤷" text="Neutral" number={feedback.neutral} />
      <Button onClick={()=>addFeedback(setfeedback, feedback, -1)} emoji="👎" text="Negative" number={feedback.negative} />
    </div>
  )
}

const Button = ({onClick, emoji, text, number}) =>
  <button onClick={onClick}>{emoji}<br />{text}<br />{number}</button>

const Statistics = ({feedback}) => {
  const statResolution = 2
  return (
    <div>
      <h2>Statistics</h2>
      {
        feedback.total === 0 ? <p>No feedback yet.</p> :
        <table>
          <tbody>
            <StatisticLine title="Positive" stat={feedback.positive} />
            <StatisticLine title="Neutral" stat={feedback.neutral} />
            <StatisticLine title="Negative" stat={feedback.negative} />
            <StatisticLine title="Total" stat={feedback.total} />
            <StatisticLine title="Average" stat={((feedback.positive-feedback.negative)/feedback.total).toFixed(statResolution)} />
            <StatisticLine title="Happiness" stat={(feedback.positive/feedback.total*100).toFixed(statResolution)+" %"} />
          </tbody>
        </table>
      }
    </div>
  )
}
const StatisticLine = ({title, stat}) => <tr><td>{title}</td><td>{stat}</td></tr>


// positive: 1, neutral: 0, negative: -1
const addFeedback = (setFeedback, feedback, kind) => {
  switch (kind) {
    case 1:
      setFeedback({
        positive: feedback.positive+1,
        neutral: feedback.neutral,
        negative: feedback.negative,
        total: feedback.total+1,
      });
      console.log("Feedback added: positive")
      break;
    case -1:
      setFeedback({
        positive: feedback.positive,
        neutral: feedback.neutral,
        negative: feedback.negative+1,
        total: feedback.total+1,
      });
      console.log("Feedback added: negative")
      break;
    case 0:
      setFeedback({
        positive: feedback.positive,
        neutral: feedback.neutral+1,
        negative: feedback.negative,
        total: feedback.total+1,
      });
      console.log("Feedback added: neutral")
      break;
    default:
      console.error("Unhandled feedback: expected 1/0/-1, got", kind)
  }
}
