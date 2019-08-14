import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  state = {
    divColor: ''
  }

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  colorHandler = color => {
    console.log(color);
    this.setState({ divColor: color });
  }
  render() {
    const { colors } = this.props;

    const colorElements = colors.map(color => {
      return (
        <button className={styles.Button} key={color} style={{ backgroundColor: color }} onClick={() => this.colorHandler(color)}>
          {color}
        </button>
      );
    });
    return (
      <>
        {colorElements}
        <div className={styles.Circle} style={{ background: this.state.divColor }}></div>
    </>
    );
  }
}


