import styled from 'styled-components'

export const Div = styled.div`
    display: flex;  
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 5%;
`

export const P = styled.p`
    color: currentColor;
    font-size: 30px;
`;

export const Img = styled.img`
    display: flex;  
    border-radius: 8px; 
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: 15px;
`;