import React from "react";

StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 35rem;
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
`;
function Skills() {
  return <StyledSkills></StyledSkills>;
}

export default Skills;
