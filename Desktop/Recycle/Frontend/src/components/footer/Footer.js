import react from 'react'
import Logoimg from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faFacebook,
faInstagram,
faTwitter,
faLinkedin,
faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
FooterContainer,
Wrapper,
Column,
Title,
Text,
SocialMedia,
Logo,
LogoContainer,
Icon
} from './FooterElements'

export default function Footer() {

return (

<FooterContainer>
    <Wrapper>
        <Column>
            <Title>Opening hours</Title>
            <Text>Monday-thursday: 08.00-14.00</Text>
            <Text>Friday-Sunday: 10.00-18.00</Text>
        </Column>
        <Column>
            <Title>Need help or Have Questions?</Title>
            <Text>Stockholmvägen 22</Text>
            <Text>0700020102</Text>
            <Text>saverecycle@gmail.com</Text>
        </Column>
    </Wrapper>
        
        <LogoContainer>
        <Logo src={Logoimg}></Logo>
        </LogoContainer>

    
    <SocialMedia>
        <Icon>
        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
        </Icon>
        
        <Icon>
        <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
        </Icon>
        
        <Icon>
        <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
        </Icon>
        
        <Icon>
        <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
        </Icon>
        
        <Icon>
        <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
        </Icon>
    </SocialMedia>
    
</FooterContainer>

);
}