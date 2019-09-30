import styled from 'styled-components';

export const FlexCenter = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: minmax(100px, 500px);
    margin: 0 auto;
`