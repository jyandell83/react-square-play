import React, { useState } from 'react';

import {
    SquareShape
} from './style'


const Square = () =>  {
    const [color, setColor] = useState('blue');
    const [size, setSize] = useState('300px')
    const handleClick = () => {
        setColor('red');
        setSize('200px')
    }
    return(
            <SquareShape color={color} size={size} onClick={() => handleClick()} />
    )
}

export default Square;