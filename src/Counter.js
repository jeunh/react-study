import React, { Component, useReducer, useState } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      fixed: 1
    }
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    },
    () => {
      console.log(this.state.counter);
    })
    // this.setState(state => ({
    //   counter: state.counter + 1
    // }))
  }
  handleDecrease = () => {
    // this.setState({
    //   counter: this.state.counter - 1
    // })
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    )
  }
}

export default Counter;

// function reducer(state, action) {
//   switch(action.type) {
//     case 'INCREMENT' : 
//       return state+1;
//     case 'DECREMENT' :
//       return state-1;
//     default :
//       return state; 
//   }
// }

// function Counter() {
//   // const [number, setNumber] = useState(0);
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     // setNumber(prevNumber => prevNumber+1);
//     dispatch({ type: 'INCREMENT' });
//   }

//   const onDecrease = () => {
//     // setNumber(prevNumber => prevNumber-1);
//     dispatch({ type: 'DECREMENT' });
//   }

//   return (
//     <div>
//       <h3>{number}</h3>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   )
// }

// export default Counter;