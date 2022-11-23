import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: auto;
`;

//Start of Hero section
export const Hero = styled.div`
    width: 100%;
    height: 30em;
    
`;

export const EntryContent = styled.div`
    
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #67C667;
    position: relative;
    width: 100%;
    height: 38em;

    p{
    font-size: 30px;
    @media (max-width: 700px) {
    font-size: 18px;
}
}
`;

export const RecycleTitle = styled.div`
   position: absolute;
    z-index: 1;    
    color: #fff;
    font-size: 35px;
    left: 45%;    
    margin: 0 auto;
    margin-top: 2em;

`;
//End of Hero section

//Start of MapBox section
export const MapBox = styled.div`
    position: relative;
    width: 100%;
    

`;
//End of MapBox section

//Start of RecycleDescription
export const WrapperContent = styled.div`
    height: auto;
    width: 100%;
    background-color:#D0F0D0;
    display: flex;
   
`;

export const WrapperContain = styled.div`
    width: 100%;
    margin: 2em;
    text-align: center;
    justify-content: center;
    background-color:#D0F0D0 ;
    
`;

export const WrapperDescription = styled.div`
    margin: 0 auto;
    width: auto;
    display: inline;

    h2{
        font-size: 35px;
    }

    h3{
        font-size: 25px;
    }

    td{
        font-size: 20px;
        padding: 10px 40px 10px 40px;
    }
`;

export const WrapperButton = styled.button`
    margin-top: 2em;
    border-radius: 20px;
    border:solid;
    border-color: green;
`;
//End of RecycleDescription