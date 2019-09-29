import React from 'react';
import Square from '../Square'

import {
    FlexCenter
} from './style';



const App = () => {
  return (
    <FlexCenter className="App">
      <h1>Click the shapes if you dare</h1>
      <Square />
    </FlexCenter>
  );
}

export default App;
