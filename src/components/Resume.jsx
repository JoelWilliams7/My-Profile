import React from "react";
import styled from "styled-components";
import joelResumeUpdated from "../assets/Joel Williams Web Developer Resume.pdf";

const StyledResume = styled.div`
  position: relative;
  width: 11rem;
  height: 2.5rem;
  background: white;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 1rem;
  font-family: Nunito, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;

  a {
    color: #2e4f4f;
    transition: color 0.4s;
    text-decoration: none;
  }

  &:hover {
    scale: 1.1;
    background: #2e4f4f;
    color: white;
    outline: 2px solid white;

    a {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100px auto;
    height: 80px auto;
    margin: 0.5rem 0;
    margin-top: 50px;
    border-radius: 75px;
  }
`;

const ResumeContainer = styled.div`
  width: 160px;
  color: rgb(255, 255, 255);
  margin: 90px auto;
  padding: 40px auto;
  text-align: center;
    
  }
  @media (max-width: 768px) {
    h3 {
      width: 100px auto;
      height: 80px auto;
      margin: 0.5rem 0;
      margin-top: 50px;
  }
}
`;

function Resume() {
  return (
    <ResumeContainer id="resume-container">
      <h3>Resume</h3>
      <StyledResume>
        <a href={joelResumeUpdated} download>
          Download CV
        </a>
      </StyledResume>
    </ResumeContainer>
  );
}

export default Resume;
