import React from 'react';
import Square from '../Square'

import {
    FlexCenter
} from './style';



const App = () => {
  return (
    <div>
    <h1>Do you dare click a square?</h1>
    <FlexCenter className="App">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </FlexCenter>
    </div>
  );
}

export default App;
