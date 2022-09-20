import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComment></LoadComment>
    </div>
  );
}


function LoadComment() {
  const [comments, setComments] = useState([])
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))

  }, []);

  return (
    <div>
      <h1>All comments: {comments.length}</h1>
      {
        // comments.map(comment => Comment(comment))
        comments.map(comment => <Comment name={comment.name} email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

// display comments
function Comment(props) {

  return (
    <div style={{ border: '2px solid yellow', margin: '10px', backgroundColor: 'gray', borderRadius: '15px', padding: '10px' }}>
      <h3>Name: {props.name}</h3>
      <p style={{ color: 'yellow' }}>Email: {props.email}</p>
      <p>Body: {props.body}</p>
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
