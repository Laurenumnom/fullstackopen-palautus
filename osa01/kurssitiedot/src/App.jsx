const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React',    exercises: 10},
      { name: 'Using props to pass data', exercises:  7},
      { name: 'State of a component',     exercises: 14},
    ],
    totalExercises: function() {
      var count = 0;
      this.parts.forEach((part) => {
        count += part.exercises;
      });
      return count;
    }
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )

}
export default App

const Header = ({course}) => (<header><h1>{course.name}</h1></header>);
const Part = ({name, exercises}) => (<tr><td>{name}</td><td>{exercises}</td></tr>);
const Total = ({course}) => (<p>Total number of exercises: {course.totalExercises()}</p>);

const Content = ({course}) => {
  const buf = [];
  var i=0;
  course.parts.forEach((part) => {
    buf.push(<Part key={i} name={part.name} exercises={part.exercises} />);
    i++;
  });
  return (
    <table className="partslist">
    <thead><tr><th>Part</th><th>Exercises</th></tr></thead>
    <tbody>{buf}</tbody>
    </table>
  );
}
