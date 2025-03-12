import React from 'react';
import styled from 'styled-components';

import icoSvgHandshake from '../icons/handshake-icon.svg';

const ContactContainer = styled.div`
    padding: 60px 20px;
    text-align: center;
    background-color: #f8f8f8;
    border-radius: 100px 100px 20px 20px;
    height: 200px;
    margin-top: -200px;
    position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 0.9em;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ProfileImage src={icoSvgHandshake} alt="Kawsar Ahmed" />
      <Title>Tell me about your next project</Title>
      <ButtonContainer>
        <Button>Email Me</Button>
        <Button>WhatsApp</Button>
      </ButtonContainer>
    </ContactContainer>
  );
}

export default Contact;
