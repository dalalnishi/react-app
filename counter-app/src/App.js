import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.onDec}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.onInc}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    count:state.counter
  }
}

const mapDispatchToProps=dispatch=>{
    return{
      onInc: ()=>dispatch({
        type: 'INCREMENT'     
      }),

      onDec: ()=>dispatch({
        type: 'DECREMENT'     
      })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
