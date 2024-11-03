import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e9e9e9;
  font-family: Arial, sans-serif;
  color: #333;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px 30px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.9em;
  color: #555;

  a {
    text-decoration: none;
    color: #555;
  }

  text {
    color: #555;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <ButtonContainer>
          <Button>Email</Button>
          <Button>CV</Button>
        </ButtonContainer>
      </LeftContainer>
      <Links>
        <a href="#linkedin">LinkedIn</a>
        <text> / </text>
        <a href="#dribbble">Dribbble</a>
        <text> / </text>
        <a href="#instagram">Instagram</a>
      </Links>
    </HeaderContainer>
  );
}

export default Header;
