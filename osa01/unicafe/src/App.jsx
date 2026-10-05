import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState({positive:0, neutral:0, negative:0})

  const Header = () => (<header><h1>Give Feedback</h1></header>);
  const Buttons = ({feedback}) => {
    return (
      <div className="feedbackButtons">
        <button onClick={()=>addFeedback(1)}>👍<br />Positive<br />{feedback.positive}</button>
        <button onClick={()=>addFeedback(0)}>🤷<br />Neutral<br />{feedback.neutral}</button>
        <button onClick={()=>addFeedback(-1)}>👎<br />Negative<br />{feedback.negative}</button>
      </div>
    )
  }

  // positive: 1, neutral: 0, negative: -1
  const addFeedback = (kind) => {
    switch (kind) {
      case 1:
        setFeedback({
          positive: feedback.positive+1,
          neutral: feedback.neutral,
          negative: feedback.negative,
        });
        console.log("Feedback added: positive")
        break;
      case -1:
        setFeedback({
          positive: feedback.positive,
          neutral: feedback.neutral,
          negative: feedback.negative+1,
        });
        console.log("Feedback added: negative")
        break;
      case 0:
        setFeedback({
          positive: feedback.positive,
          neutral: feedback.neutral+1,
          negative: feedback.negative,
        });
        console.log("Feedback added: neutral")
        break;
      default:
        console.error("Unhandled feedback: expected 1/0/-1, got", kind)
    }
  }

  return (
    <div>
      <Header />
      <Buttons feedback={feedback} />
      <Stats />
    </div>
  )
}

export default App


const Stats = () => {
  return (
    <div>
      <h2>Statistics</h2>
      TODO: many numbers
    </div>
  )
}
