import React from "react";
import styled from "styled-components";
import { WindupChildren, Pace } from "windups";

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
    margin-left: 80px;
    color: #e5a186;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
    font-weight: 550;
    width: 75vw;
    line-height: 150%;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
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
