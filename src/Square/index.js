import React, { useState } from 'react';

import {
    SquareShape
} from './style'


const Square = () =>  {
    const [color, setColor] = useState('blue');
    return(
            <SquareShape color={color} onClick={() => setColor('red')} />
    )
}

export default Square;