import React from "react";
import styled from "styled-components";
import joelResumeUpdated from "../assets/Joel Williams Web Developer Resume.pdf";

const StyledResume = styled.div`
  position: relative;
  margin: 50px auto;
  width: 11rem;
  height: 2.5rem;
  background: white;
  color: var(--main-black);
  border: 2px solid var(--main-black);
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
  transition: all 0.3s ease-in-out 0s;
  animation: 0.6s ease 0s 1 normal none running enterLeft;

  button {
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
    cursor: default;
    margin-right: 30px;
  }

  &:hover {
    scale: 1.1;
    background: #2e4f4f;
    color: white;
    outline: 2px solid white;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 0.5rem 0;
  }
`;

const ResumeContainer = styled.div`
  width: 150px;
  color: rgb(255, 255, 255);
  margin: 0px auto;

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
