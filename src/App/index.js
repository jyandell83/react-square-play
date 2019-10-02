import React from 'react';
import Square from '../Square'

import {
    FlexCenter
} from './style';


const elementArr = []
const makeSquares = (numberOfSquares) =>  {
  
  for (let i = 1; i <= numberOfSquares; i++) {
    elementArr.push(<Square key ={i}/>)
  }
}

const App = () => {
  makeSquares(200);
  return (
    <div>
    
    <FlexCenter className="App">
      {elementArr}
    </FlexCenter>
    </div>
  );
}

export default App;
