import styled from 'styled-components';

export const SquareShape = styled.div`
    height: ${props =>  props.size}
    // width: ${props =>  props.size}
    background-color: ${props =>  props.color};
`