import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";
import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 30px;
  left: 0;
  border: none;
  background: none;
  width: 40px;
`;

function scrollToTopOfPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function UpButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  return (
    <StyledButton onClick={scrollToTopOfPage}>
      <ArrowUp />
    </StyledButton>
  );
}

export default UpButton;
