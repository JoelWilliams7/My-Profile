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
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
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
    width: 80px;
    height: 80px;
    margin: 0.5rem 0;
  }
`;

const ResumeContainer = styled.div`
  width: 100%;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: white;
    position: absolute;
    top: 2225px;
    padding: 30px;
    margin-top: 50px;
    display: block;

    font-weight: bold;
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
