import React, { Component } from 'react';

class OldClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
   };
    console.log('constructor');
  }

  increment = () => {
    this.setState((preState) => ({
     count: preState.count + 2,
      count2: preState.count2 + 2,
    }));
  };

  decrement = () => {
    this.setState((preState) => ({
     count: preState.count - 1,
      count2: preState.count2 - 1,
   }));
 };

  render() {
    console.log('render');
  const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <>
        <h1 className="mt-5">{name}</h1>
        <div className="mt-6 flex items-center gap-5">
          <button
           className="rounded bg-black-400 px-4 py-2"
           onClick={this.decrement}
         >
            -
          </button>
         <h2>{count}</h2>
          <h2>{count2}</h2>
          <button
            className="rounded bg-black-400 px-4 py-1"
            onClick={this.increment}
         >
            +
</button>
      </div>
      </>
   );
 }
}

export default OldClass;
