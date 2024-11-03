import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f8f8f8;
  color: #333;
  font-size: 0.9em;
  border-top: 1px solid #ccc;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9em;
  color: #555;

  a {
    text-decoration: none;
    color: #555;

    &:hover {
      color: #333;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 All rights reserved.</FooterText>
      <FooterLinks>
        <a href="#linkedin">LinkedIn</a>
        <text> / </text>
        <a href="#dribbble">Dribbble</a>
        <text> / </text>
        <a href="#instagram">Instagram</a>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
