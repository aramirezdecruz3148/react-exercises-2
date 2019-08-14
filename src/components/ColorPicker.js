import React from 'react';
import styles from './ColorPicker.css';

function ColorPicker() {
  const clickRed = () => {
    console.log('Red');
  };

  const clickYellow = () => {
    console.log('Yellow');
  };

  const clickBlue = () => {
    console.log('Blue');
  };

  return (
    <>
      <button className={styles.Red} onClick={clickRed} >Red</button>
      <button className={styles.Yellow} onClick={clickYellow} >Yellow</button>
      <button className={styles.Blue} onClick={clickBlue} >Blue</button>
    </>
  );
}

export default ColorPicker;
