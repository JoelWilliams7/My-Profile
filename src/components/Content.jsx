import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  > h4 {
    position: relative;
    display: flex;
    left: 150px;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-size: 40px;
    color: Pink;
    padding: 10px;
  }

  p {
    color: #e5a186;
  }
`;

function Content() {
  return (
    <StyledContent>
      <h4>Frontend Developer | React</h4>
      <p>
        In a digital age, we are driven by the technological advancement of
        science and innovation, and working from a call center has not brought
        me closer to the life I so desire. Problem-solving, innovation, data
        analysis, and critical thinking are the knowledge I put in a lot of
        hours to attain. Given the right time and opportunity, I will be one of
        the most outstanding web developers.
      </p>
    </StyledContent>
  );
}

export default Content;
