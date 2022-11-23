import styled from 'styled-components'

export const Content = styled.div`
    margin-top: 1em;
`;

export const EcoImg = styled.img`
    margin: 0 auto;
    width: 40%;
    z-index: -1;
    position: absolute;
    background: transparent;
    rotate: calc((-40deg));
`;

export const BoxTitle = styled.div`
    font-size: 25px;
    color: #fff;
    padding-top: 1em;

`;

export const Box = styled.div`
    background-color: ${(props) => props.color};
    margin: 0 auto;
    max-width: 1000px;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
   

`;

export const InnerBox = styled.div`
    color: #fff;
    padding-top: 1em;
    padding-left:20px ;
    padding-right:20px ;
    padding-bottom: 1em;
    font-size: 18px;
    margin: 0 auto;
    height: 8em;
    
`;