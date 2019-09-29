import React, { useState } from 'react';

import {
    SquareShape
} from './style'


const Square = () =>  {
    const [color, setColor] = useState('blue');
    const [size, setSize] = useState('300px')
    const handleClick = () => {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let size = Math.ceil(Math.random()*500);
        setColor(`rgb(${red}, ${green}, ${blue})`);
        setSize(`${size}px`)
    }
    return(
            <SquareShape color={color} size={size} onClick={() => handleClick()} />
    )
}

export default Square;