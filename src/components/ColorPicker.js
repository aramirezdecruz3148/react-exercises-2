import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends Component {
  static propTypes = {
    colorHandler: PropTypes.func.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    const { 
      colors,
      colorHandler
    } = this.props;

    const colorElements = colors.map(color => {
      return (
        <button className={styles.Button} key={color} style={{ backgroundColor: color }} onClick={() => colorHandler(color)}>
          {color}
        </button>
      );
    });
    return (
      <>
        {colorElements}
    </>
    );
  }
}


