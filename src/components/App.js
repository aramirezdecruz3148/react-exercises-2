import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import Incrementor from './Incrementor';
import ColorDisplay from './ColorDisplay';

export default class App extends Component {
  state = {
    divColor: ''
  }

  colorHandler = color => {
    console.log(color);
    this.setState({ divColor: color });
  }

  render() { 
    return (
      <>
      <ColorPicker colors={['Red', 'Yellow', 'Green', 'Blue']} colorHandler={this.colorHandler}/>
      <ColorDisplay color={this.state.divColor}/>
      <Incrementor />
    </>
    );
  }
}
