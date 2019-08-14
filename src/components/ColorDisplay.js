import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ColorDisplay.css';

export default class ColorDisplay extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  render() { 
    const { color } = this.props;

    return (
      <>
        <div className={Styles.Circle} style={{ background: color }}></div>
      </>
    );
  }
}
 
