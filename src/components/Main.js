import React from 'react';
import styled from 'styled-components';

import icoSvgMan from '../icons/hair-styles-men-icon.svg';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  background-color: #e9e9e9;
  color: #333;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
  line-height: 1.2;
  font-weight: bold;
  color: #333;

  span {
    font-weight: normal;
  }
`;

const LatestShotsButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 20px 40px;
  font-size: 0.9em;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

function Main() {
  return (
    <MainContainer>
      <ProfileImage src={icoSvgMan} alt="Kawsar Ahmed" />
      <Title>
        Building digital products, brands, and experience.
      </Title>
      <LatestShotsButton>Latest Shots</LatestShotsButton>
    </MainContainer>
  );
}

export default Main;
