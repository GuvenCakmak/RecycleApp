import React from 'react';
import EntryImg from './images/EntryImg.png';
import OurMission from './images/OurMission.png';
import Employees from './images/Employees.png';
import TeddyBear from './images/TeddyBear.png';
import Diagram from './images/Diagram.png';
import {
PageContainer,
EntryContent,
RecycleButton,
EntryContentImg,
Hero,
RecycleButtonContent,
EntryBlock,
ContentBox,
ImgBox,
ContentImg,
OurMissionRow,
ReadMoreButton,
WrapperContent,
WrapperBox,
WrapperContain,
WrapperText,
ProductTitle,
ProductNews,
ProductButton
} from '../components/stylePages/StyleHome'

function home() {
    return (

<PageContainer>
    <Hero>
        <EntryContent>
            <EntryContentImg src={EntryImg}></EntryContentImg>
                <RecycleButton>
                    <RecycleButtonContent><p>Recycle now!</p></RecycleButtonContent>
                </RecycleButton>               
        </EntryContent>
        <EntryBlock>
            <h2>Recycle</h2>
                <p>By reducing waste and choosing to recycle, your effort saves alot of energy and saves the environment. 
                Making use of recycled materials when producing saves
                more energy than producing from scratch with raw materials.
                </p>
        </EntryBlock>
    </Hero>
    
    <ContentBox >
        <ImgBox>
            <ContentImg src={OurMission}></ContentImg>
        </ImgBox>
            <OurMissionRow>
                <h2>Our mission</h2>
                    <ReadMoreButton>
                        <p>Read more</p>
                    </ReadMoreButton>   
            </OurMissionRow>
    </ContentBox>

    <WrapperContent>
        <WrapperContain>
            <WrapperBox src={TeddyBear}></WrapperBox>
                <WrapperText>
                    <h2>200 kg</h2>
                    <p>Toys that are sorted every week</p>
                </WrapperText>
            <WrapperBox src={Diagram}></WrapperBox>
                <WrapperText>
                    <h2>2 billions</h2>
                    <p>Toys sorted 2021</p>
                </WrapperText>
            <WrapperBox src={Employees}></WrapperBox>
                <WrapperText>
                    <h2>275</h2>
                    <p>employees</p>
                </WrapperText>
        <ProductNews>
            <ProductTitle>
                <h2>Checkout our second-hand toys</h2>
                    <ProductButton>Toys</ProductButton> 
            </ProductTitle>
        <OurMissionRow>
            <h2>Make a change</h2>
                <RecycleButtonContent>Recycle now!</RecycleButtonContent>
        </OurMissionRow>
                   
                
        
        </ProductNews>
      
      
        </WrapperContain>
    </WrapperContent>

 




</PageContainer>
        
);
}

export default home;