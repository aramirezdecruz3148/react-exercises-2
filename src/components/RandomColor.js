import React, { Component } from 'react';
import Styles from './RandomColor.css';

export default class RandomColor extends Component {
  state = {
    randomColor: ''
  }

  componentDidMount() {
    setInterval(this.randomColorGenerator, 1000);
  }
  
  randomColorGenerator = () => {
    const colorArr = ['red', 'yellow', 'green', 'blue', 'pink', 'grey'];
    const randomIndex = Math.floor(Math.random() * colorArr.length); 
    const itemAtIndex = colorArr[randomIndex];
    
    if(this.state.randomColor === itemAtIndex) {
      this.setState({ randomColor: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
    } else {
      this.setState({ randomColor: itemAtIndex });
    }
  }
 
  render() { 
    const { randomColor } = this.state;

    return (
      <div className={Styles.Circle} style={{ background: randomColor }}></div>
    );
  }
}
