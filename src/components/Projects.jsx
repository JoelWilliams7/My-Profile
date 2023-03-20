import React from "react";
import styled from "styled-components";
import booksProjectsPic from "../assets/books-project.png";

const StyledProjects = styled.div`
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
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  animation: 0.6s ease 0s 1 normal none running fadeIn;

  p {
    font-size: 12px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  color: white;
`;

function Project() {
  return (
    <ProjectsContainer id="projects-container">
      <h3>Projects</h3>
      <StyledProjects>
        <img
          src={booksProjectsPic}
          alt="Book Projects Pic"
          style={{
            width: "100%",
          }}
        />
        <p>
          Welcome to your Books library, here you can create, edit, delete, and
          save all of your must read books. Using Supabase for backend and
          database.
        </p>
      </StyledProjects>
    </ProjectsContainer>
  );
}

export default Project;
