import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 80px;
  height: 32px;
  outline: none;
  position: relative;
  border: ${(props) => (props.isNav ? "0" : "2px solid white")};
  cursor: pointer;
  background: ${(props) => (props.isNav ? "transparent" : "#CBE4DE")};
  color: white;
  margin: 0.5rem;
  border-radius: ${({ isNav }) => (isNav ? "0" : "3px")};
  display: flex;
  align-items: center;
  justify-content: center;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: transparent;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    :after {
      width: 100%;
      background: white;
    }
  }
`;

function Button({ isNav, children, onClick, className }) {
  return (
    <StyledButton className={className} onClick={onClick} isNav={isNav}>
      {children}
    </StyledButton>
  );
}

export default Button;
