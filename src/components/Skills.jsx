import React from "react";
import styled from "styled-components";
import html5 from "../assets/html-5.svg";
import css3 from "../assets/css-3.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 25rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  margin: 4rem 2rem;
  box-sizing: border-box;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  font-weight: bold;
  animation: 0.6s ease 0s 1 normal none running fadeIn;

  p {
    font-size: 12px;
  }
`;
const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const skills = [
  <>
    <img src={html5} alt="skill" width="100px" />
    <h3>HTML</h3>
    <p>DetailsDetailsDetailsDetails</p>
  </>,
  <>
    <img src={css3} alt="skill" width="100px" />
    <h3>CSS</h3>
    <p>DetailsDetailsDetails</p>
  </>,
  <>
    <img src={javascript} alt="skill" width="100px" />
    <h3>JavaScript</h3>
    <p>DetailsDetailsDetails</p>
  </>,
  <>
    <img src={react} alt="skill" width="100px" />
    <h3>React</h3>
    <p>DetailsDetailsDetails</p>
  </>,
];

function Skills() {
  return (
    <SkillsContainer>
      {skills.map((skill, index) => (
        <StyledSkills key={index} className="skill">
          {skill}
        </StyledSkills>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
