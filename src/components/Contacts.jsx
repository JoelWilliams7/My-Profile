import React from "react";
import styled from "styled-components";
import { GitHub, Linkedin, Inbox } from "react-feather";

const StyledContacts = styled.div`
  width: 80%;
  margin: 2rem auto;
  height: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  > h3 {
    color: white;
    position: absolute;
    top: -40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5rem 0;

  > h3 {
    color: white;
  }
`;

const ContactsBox = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  outline: 3px solid #2e4f4f;
  background: white;
  color: #2e4f4f;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 14px 28px;

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

const contacts = [
  {
    icon: <GitHub />,
    url: "https://github.com/joelwilliams7",
  },
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/joel-r-williams",
  },
  {
    icon: <Inbox />,
    url: "mailto:joelrwilliams43@gmail.com",
  },
];

function Contacts() {
  return (
    <ContactsContainer id="contacts-container">
      <StyledContacts>
        <h3>Contacts</h3>
        {contacts.map((contact) => (
          <a
            key={contact.url}
            href={contact.url}
            target="_blank"
            rel="referrer"
          >
            <ContactsBox>{contact.icon}</ContactsBox>
          </a>
        ))}
      </StyledContacts>
    </ContactsContainer>
  );
}

export default Contacts;
