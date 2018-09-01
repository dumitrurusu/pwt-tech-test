import styled from "styled-components";
import background from "../pictures/nav.png";

export const Logo = styled.a`
  font-family: "Playfair Display SC", serif;
  font-size: 20px !important;
  color: black !important;
  @media screen and (max-width: 670px) {
    font-size: 15px !important;
  }
`;

export const Head = styled.header`
  background: url(${background});
  background-size: cover;
  background-position: center;
`;
