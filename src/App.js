
import './App.css';
import React from 'react';



class App extends React.Component{

  constructor(){
    //TO access this
    super();
    //TO DEFINE STATE IN CONSTRUCT
  this.state={task: "study"};
  //BIND FUNCTION SCOPE
  this.handlesubmit=this.handlesubmit.bind(this);
  }


  handlesubmit(e) {
    
    e.preventDefault();
    this.state.task=e.target[0].value;


}
//to access method you should use this 
render(){
  return (
    <div className="todo"> 
     <form onSubmit={this.handlesubmit}>
      <input placeholder="type your task"></input>
      <button>ADD</button>
      <p>{this.state.task}</p>
     </form> 
    </div> 
  );
  }
}

export default App;
