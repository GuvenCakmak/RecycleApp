import { useSelector } from "react-redux";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logoimg from "../images/logo.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  NavContainer,
  LeftContainer,
  RightContainer,
  Logo,
  NavbarLinkContainer,
  NavLink,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  OpenLinksButton,
  ExtendedNavLink
} from "./NavbarElements";

export default function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={Logoimg}></Logo>
        </LeftContainer>

        <RightContainer>
          <NavbarLinkContainer>
            <NavLink to="/Recycle">Recycle</NavLink>
            <NavLink to="/Store">Store</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/About">About Us</NavLink>
            <NavLink to="/FAQ">FAQ</NavLink>
            <NavLink to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2x"
              ></FontAwesomeIcon>
              <span className="bag-quantity">
                <span style={{ paddingLeft: "1em" }}>{cartTotalQuantity}</span>
              </span>
            </NavLink>
          </NavbarLinkContainer>
        </RightContainer>

        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <> &#10005; </> : <> &#8801; </>}
        </OpenLinksButton>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <ExtendedNavLink to="/Recycle">Recycle</ExtendedNavLink>
          <ExtendedNavLink to="/Store">Store</ExtendedNavLink>
          <ExtendedNavLink to="/Contact">Contact</ExtendedNavLink>
          <ExtendedNavLink to="/About">About Us</ExtendedNavLink>
          <ExtendedNavLink to="/FAQ">FAQ</ExtendedNavLink>
          <ExtendedNavLink to="/cart">Cart</ExtendedNavLink>
        </NavbarExtendedContainer>
      )}
    </NavContainer>
  );
}
