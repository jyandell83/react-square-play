import React from 'react';
import Square from '../Square'

import {
    FlexCenter
} from './style';



const App = () => {
  return (
    <div>
    <h1>Click the shapes if you dare</h1>
    <FlexCenter className="App">
      <Square />
      <Square />
      <Square />
      <Square />
    </FlexCenter>
    </div>
  );
}

export default App;
