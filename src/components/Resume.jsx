import React from "react";
import styled from "styled-components";
import joelResumeUpdated from "../assets/Joel Resume updated.pdf";

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
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-variant-alternates: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    font-optical-sizing: ;
    font-kerning: ;
    font-feature-settings: ;
    font-variation-settings: ;
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

    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

function Resume() {
  return (
    <ResumeContainer>
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
