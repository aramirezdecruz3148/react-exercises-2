import React from 'react';
import ColorPicker from './ColorPicker';
import Incrementor from './Incrementor';

export default function App() {
  return (
    <>
      <ColorPicker colors={['Red', 'Yellow', 'Green', 'Blue']}/>
      <Incrementor />
    </>
  );
}
