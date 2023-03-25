import React from "react";
import styled from "styled-components";
import { WindupChildren, Pace } from "windups";

const StyledContent = styled.div`
  > h4 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: Pink;
    padding: 20px;
    flex-direction: column;
  }

  p {
    color: #e5a186;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
    font-weight: 550;
    margin: 60px;
    line-height: 150%;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.9rem;
    flex-direction: column;
    align-items: center;
  }
`;

function Content() {
  return (
    <StyledContent>
      <WindupChildren>
        <h4>
          <Pace getPace={(char) => (char === " " ? 400 : 80)}>
            Frontend Developer | React
          </Pace>
        </h4>
      </WindupChildren>
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
