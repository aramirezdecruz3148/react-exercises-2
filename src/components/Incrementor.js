import React, { Component } from 'react';

export default class Incrementor extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() { 
    return ( 
      <>
        <span>You clicked me {this.state.count} times!</span>
        <button onClick={this.incrementCount}>Click Me!</button>
      </>
    );
  }
}
