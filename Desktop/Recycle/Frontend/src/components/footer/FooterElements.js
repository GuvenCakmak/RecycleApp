import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 22rem;
  background-color: green;

  bottom: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 20rem;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1.5rem;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #fff;
  margin: 0.5rem;
  font-weight: bold;
`;

export const Text = styled.div`
  color: #fff;
  padding: 0 0 0 1rem;
`;

export const Icon = styled.div`
  height: 1.5rem;
  margin: 1rem 1.5rem 1rem 1.5rem;
  position: relative;
`;

export const SocialMedia = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  color: whitesmoke;
  justify-content: center;
  background-color: #54eb54;
`;

export const LogoContainer = styled.div`
  width: 100%;
  float: right;
`;

export const Logo = styled.img`
  float: right;
  height: auto;
  max-width: 7.5rem;
  margin: 0 2rem;
`;
