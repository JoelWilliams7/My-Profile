import React from "react";
import styled from "styled-components";
import html5 from "../assets/html-5.svg";
import css3 from "../assets/css-3.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 25rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  margin: 2rem;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  animation: 0.6s ease 0s 1 normal none running fadeIn;

  p {
    font-size: 12px;
    color: white;
  }

  h3 {
    color: #ff6464;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const SkillsBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5rem 0;

  > h3 {
    color: white;
  }
`;

const skills = [
  <>
    <img src={html5} alt="skill" width="100px" />
    <h3>HTML</h3>
    <p>
      Completed Certificate course from freecodecamp, Where I through Responsive
      Web Design. I learnt to build: Froms, Tribute Page, Technical Documetation
      Page, product landing Page.
    </p>
  </>,
  <>
    <img src={css3} alt="skill" width="100px" />
    <h3>CSS</h3>
    <p>
      Learnt basic CSS through freecodecamp, CSS box Model, CSS Flexbox, CSS
      Pseudo Selectors, Intermediate CSS, CSS Variables, CSS Grid, CSS
      Animation, and CSS Transforms.
    </p>
  </>,
  <>
    <img src={javascript} alt="skill" width="100px" />
    <h3>JavaScript</h3>
    <p>
      Certified from FreeCodeCamp in JavaScript Algforithms and Data Structures
      Certification. I did ES6, Regular Expressions, Debugging, Basic Data
      Structures, Basic Algorithm Scripting, Object Oriented programming,
      Functional Programming, and Intermedited Algorithm Scipting.
    </p>
  </>,
  <>
    <img src={react} alt="skill" width="100px" />
    <h3>React</h3>
    <p>
      Enrolled in one of Udemy Modern React course. Where I learnt to use:
      Hooks, API, Navigation and Routing Systems, Diving into the state system,
      Diving into Props and state Design.
    </p>
  </>,
];

function Skills() {
  return (
    <SkillsContainer id="skills-container">
      <h3>Skills</h3>
      <SkillsBox>
        {skills.map((skill, index) => (
          <StyledSkill key={index} className="skill">
            {skill}
          </StyledSkill>
        ))}
      </SkillsBox>
    </SkillsContainer>
  );
}

export default Skills;
