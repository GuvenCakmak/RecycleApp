import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavContainer = styled.nav`
background-color: green;
width: 100%;
height: ${(props) => (props.extendNavbar ? "100vh" : "5rem")};
flex-direction: column;
display: flex;
justify-content: space-between;

@media (min-width: 700px) {
height: 5rem;

}`;

export const LeftContainer = styled.div`
flex: 20%;
flex-direction: column;
align-items: flex-start;
padding: left 1em;
`;

export const RightContainer = styled.div`
flex: 80%;
display: flex;
align-items: center;
justify-content:center ;

margin-right: 1%;
`;

export const Logo = styled.img`
height: auto;
max-width: 7.5rem;
margin: 0 2rem;
`;

export const NavbarLinkContainer =styled.div`
display: flex;
`;

export const NavbarInnerContainer = styled.div`
width:100%;
height: 5rem;
display: flex;
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
margin: 2rem;
text-decoration: none;
font-family: arial;
font-size: medium;

@media (max-width: 700px) {
display: none;

}`;

export const OpenLinksButton = styled.button`
margin: 0 2rem 0 0;
width: auto;
height: auto;
background: none;
border: none;
color: white;
font-size: 3rem;
cursor: pointer;


@media (min-width: 700px) {
    display: none;

}`;

export const ExtendedNavLink = styled(Link)`
color: white;
display: flex;
margin: 2rem;
text-decoration: none;
font-family: arial;
font-size: medium;
&:hover {border-bottom: 2px solid white;}
`;


export const NavbarExtendedContainer = styled.div` 
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display: none;

}`;