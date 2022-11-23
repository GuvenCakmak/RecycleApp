import React from 'react';
import AbousUsImg from './images/AboutUsImg.png'

import {
Content,
Box,
InnerBox,
BoxTitle,
EcoImg
} from '../components/stylePages/StyleAbout'


function About() {
    return (
        <Content>
            
            <Box color="#67C667" >
                <BoxTitle>About us</BoxTitle>
                    <InnerBox>
                    Our company established 1987 and has throughout the years grown enormously to be one of the leading recycling companies
                    in sweden. By taking care of the sorting, we make it easier for the public to recycle in a safe and enviromentally
                    friendly way. Save & Recyling strives for continous development for both society and individual.
                    </InnerBox>
            </Box>
                <EcoImg src={AbousUsImg}></EcoImg>
            <Box color="#FD7878">
                <BoxTitle>How we contribute to a more enviromentally friendly world</BoxTitle>
                    <InnerBox>
                    Through monitoring our workplace energy usage, replacing old inefficient machines, encouriging recycling your old toys we have managed.
                    We continue to inspire thousands of people to be enviromentally friendly at our annual event.     
                    </InnerBox>
            </Box>
            <Box color="#6ED6E4">
                <BoxTitle>Our yearly environmental event</BoxTitle>
                    <InnerBox>
                    Annualy we hold a big event with over 35000 people where we raise important enviroment questions, we
                    help share our vision, we also provide food, entertaining performances, more fun and interesting activities.  
                    </InnerBox>
            </Box>


        </Content>
    );
}

export default About;