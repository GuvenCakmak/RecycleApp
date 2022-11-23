import React from "react";
import ContactHero from "./images/ContactHero.png";
import {
  PageContainer,
  Wrapper,
  HeroBox,
  HeroImg,
  WrapperColumn,
  Description,
  Title
} from "../components/stylePages/StyleContact";

function Contact() {
  return (
    <PageContainer>
      <HeroBox>
        <HeroImg src={ContactHero}></HeroImg>
      </HeroBox>

      <Wrapper>
        <Description
          style={{ textAlign: "center", marginBottom: "2em", marginTop: "2em" }}
        >
          We normally respond to your email within 24 hours on non-holiday
          weekdays.
        </Description>
        <WrapperColumn>
          <Title>Phone number - customer service</Title>
          <Description>0700020102</Description>
        </WrapperColumn>
        <WrapperColumn>
          <Title>Customer service - opening hours</Title>
          <Description>Mon-Fre: 09-16</Description>
          <Description>Sat-Sun: 10-16</Description>
        </WrapperColumn>
        <WrapperColumn>
          <Title>Email</Title>
          <Description>saverecycle@gmail.com</Description>
        </WrapperColumn>
        <WrapperColumn>
          <Title>Adress</Title>
          <Description>Save&Recycling</Description>
          <Description>Stockholmvägen 22</Description>
          <Description>169 72 Solna</Description>
          <Description>Sweden</Description>
        </WrapperColumn>
        <WrapperColumn>
          <Title>Opening hours on our locations</Title>
          <Description>Monday-thursday: 08.00-14.00</Description>
          <Description>Friday-Sunday: 10.00-18.00</Description>
        </WrapperColumn>
      </Wrapper>
    </PageContainer>
  );
}

export default Contact;
