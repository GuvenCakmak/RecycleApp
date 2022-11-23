import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: auto;
`;

//Start of Hero section
export const Hero = styled.div`
    width: auto;
    height: auto;
`;

export const EntryContent = styled.div`
    position: relative;
    width: 100%;
    height: 45rem;

@media (max-width: 700px) {
    height: 15rem;
};
`;

export const EntryContentImg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
`;

export const RecycleButton = styled.div`
    top:50%;
    width:100%;
    text-align: center;
    position: relative;
`;

export const RecycleButtonContent = styled.button`
    border-radius: 3rem;
    border:solid;
`;

export const EntryBlock = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    background-color: #6ED6E4;

p {
    font-size: 15px;
    color: black;
    margin-left: 5rem;
    margin-right: 5rem;
    display:inline-block;
};

h2{
    color: Green;
    font-size: 20px;    
}
`;
// Hero section ends here ------------

// ContentBox Section starts here ------------
export const ContentBox = styled.div`
    width: auto;
    height: auto;
`;

export const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 45rem;

@media (max-width: 700px) {
    height: 15rem;
};
`;

export const ContentImg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
`; 

export const OurMissionRow = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    background-color: #008300CC;
    height: 10rem;

h2{
    color: white;
    top:10%;
    position: relative;
}
`;

export const ReadMoreButton = styled.button`
    top:10%;
    text-align: center;
    position: relative;
    border-radius: 3rem;
    border:solid;
`;
// ContentBox Section ends here ------------

// WrapperContent section starts here ----------
export const WrapperContent = styled.div`
    display: inline-block;
    height: auto;
    width: 100%;
    background-color:#D0F0D0 ;
`;

export const WrapperContain = styled.div`
    width:100%;
    height: 100%;
    position: relative;
    text-align: center;
`;

export const WrapperBox = styled.img`
    flex-direction: column;
    width: 30rem;
    height: 30rem;  

@media (max-width: 700px) {
    width: 10rem;
    height: 10rem;     
}
`;

export const WrapperText = styled.p`

h2 {
    font-size: 3em;
};

p{
    font-size: 2em;
};
`;

export const ProductNews = styled.div`
    width: auto;
    height: auto;
`;

export const ProductTitle = styled.p`
    margin-top: 7rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
h2{
    color: #00A600;
    font-size: 3rem;
}
`;

export const ProductButton = styled.button`

`;


// WrapperContent section ends here ----------





