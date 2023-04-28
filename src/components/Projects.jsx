import React from "react";
import styled from "styled-components";
import booksProjectsPic from "../assets/books-project.png";
import photoSearchingLibrary from "../assets/photo-searching-library.png";
import jsElectrical from "../assets/Js-Electrical.png";

const StyledProject = styled.div`
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

  h4 {
    color: #ff6464;
  }

  a {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 150px;
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Projects = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5rem 0;

  > h3 {
    color: white;
  }
`;

function Project() {
  return (
    <ProjectsContainer id="projects-container">
      <h3>Projects</h3>
      <Projects>
        <StyledProject>
          <a
            href="https://joelwilliams7.github.io/Books-Project/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img src={booksProjectsPic} alt="Book Projects Pic" />
            <h4>Welcome to your Books library</h4>
            <p>
              Welcome to your Books library, here you can create, edit, delete,
              and save all of your must read books. Using Supabase for backend
              and database.
            </p>
          </a>
        </StyledProject>
        <StyledProject>
          <a
            href="https://joelwilliams7.github.io/pics2/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img src={photoSearchingLibrary} alt="photo Searching Library" />
            <h4>Search for the most ideal Photo</h4>
            <p>
              Welcome to my photo Search page. Here you can search for any photo
              that can be totally reusable, without any copy right restriction.
            </p>
          </a>
        </StyledProject>
        <StyledProject>
          <a
            href="https://joelwilliams7.github.io/Js-Electrical/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img src={jsElectrical} alt="Js Electrical Online Store" />
            <h4>Purchase one of our Amazing products</h4>
            <p>
              Welcome to my Online Store. Here you can check out amazing
              electronics Sold right here in Jamaica, for a low fee. You can
              have special orders or request done with free delivery in
              Kingston.
            </p>
          </a>
        </StyledProject>
      </Projects>
    </ProjectsContainer>
  );
}

export default Project;
