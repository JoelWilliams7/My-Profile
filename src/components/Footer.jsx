import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  position: relative;
  height: 100px;
  width: fit-content;
  margin: 5rem auto;
  bottom: 0px;
  color: white;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <h6>Created by Joel Williams &copy; {new Date().getFullYear()} </h6>
    </StyledFooter>
  );
}

export default Footer;
