import React from "react";
import styled from "styled-components";
import { scrollToSection } from "../utils";

import Button from "./Button";

const StyledNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
`;

const links = ["Projects", "Skills", "Contacts", "Resume"];

function handleNavButtonClick(name) {
  scrollToSection(`${name.toLowerCase()}-container`);
}

function NavBar() {
  return (
    <StyledNav>
      {links.map((link) => (
        <Button key={link} onClick={() => handleNavButtonClick(link)} isNav>
          {link}
        </Button>
      ))}
    </StyledNav>
  );
}

export default NavBar;
