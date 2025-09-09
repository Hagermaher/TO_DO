import logo from './logo.svg';
import './App.css';


function App() {
  let task="study";
  function handlesubmit(e) {
    
    e.preventDefault();
    task=e.target[0].value;

}

  return (
    <div className="todo">
     <form onSubmit={handlesubmit}>
      <input placeholder='type your task'></input>
      <button>ADD</button>
      <p>{task}</p>
     </form>
        
    </div>
  );
}

export default App;
