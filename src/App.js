
import './App.css';
import React from 'react';
import Name from './Name';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    //inorder to use 'this' property on the increament we need to bind 
    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
  }

  increament()
  {
    this.setState((prev) => ({ counter: prev.counter + 1 })
    )
  }
  
  // use parenthesis to return  without writing the return keyword
  decreament()
  {
    this.setState((prev) => ({ counter: prev.counter -1 })
    )
  }
      render()
      {
        return <div className='app'>
          <p>{this.state.counter}</p>

          <button onClick={this.increament}>Increament</button>
          <button onClick={this.decreament}>Decreament</button>
          <br />

          <Name name={2} />
          <Name />

        </div>   
        
      }
    }

export default App;
