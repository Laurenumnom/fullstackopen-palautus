import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const rndNumAnecdote = () => {
    let num = Math.round((anecdotes.length-1)*Math.random())
    console.info("Randomized anecdote: ", num)
    return num
  }
  const [selected, setSelected] = useState(rndNumAnecdote)
  const randomizeAnecdote = () => setSelected(rndNumAnecdote)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const addVoteCurrent = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
    console.log("added vote to anecdote ", selected, votes, newVotes)
  }
  const mostVoted = () => {
    let maxVoted = 0
    let maxVotes = 0
    for (let i=0; i<votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i]
        maxVoted = i
      }
    }
    return maxVoted
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={addVoteCurrent}>vote</button> <button onClick={randomizeAnecdote}>next anecdote</button>
      <Anecdote title="Most voted anecdote" text={anecdotes[mostVoted()]} votes={votes[mostVoted()]} />
    </div>
  )
}

export default App

const Anecdote = ({text, votes, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      Votes: {votes}<br />
    </div>
  )
}
