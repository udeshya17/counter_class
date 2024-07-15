import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  handleInc = ()=>{
    this.setState((prevState)=>{
      return{
        count : prevState.count + 1
      }
    })
  }

  handleDec = ()=>{
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
      </div>
    );
  }
}

export default App;
