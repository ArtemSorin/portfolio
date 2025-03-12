import React from 'react';
import styled from 'styled-components';

import icoDesign from '../icons/design-icon.svg';
import icoDevelopment from '../icons/development-icon.svg';
import icoUIUX from '../icons/uxui-icon.svg';
import icoWebAndMobile from '../icons/webapp-icon.svg';

const ServicesContainer = styled.section`
  text-align: center;
  padding: 60px 20px 300px;
  background-color: #e9e9e9;
  color: #333;
  border-radius: 20px;
  margin: -50px 0 20px;
  position: relative;
  z-index: -2;
`;

const ServicesTitle = styled.h2`
  margin-top: 100px;
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceItem = styled.div`
  max-width: 200px;
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: #555;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ServiceDescription = styled.p`
  font-size: 0.9em;
  color: #555;
`;

function Services() {
  return (
    <ServicesContainer>
      <ServicesTitle>
        Collaborate with brands and agencies to create impactful results.
      </ServicesTitle>
      <ServiceList>
        <ServiceItem>
          <ServiceIcon src={icoUIUX} alt="UX & UI" />
          <ServiceTitle>
            UX & UI
          </ServiceTitle>
          <ServiceDescription>
            Designing interfaces that are intuitive, efficient, and enjoyable to use.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src={icoWebAndMobile} alt="Web & Mobile App" />
          <ServiceTitle>
            Web & Mobile App
          </ServiceTitle>
          <ServiceDescription>
            Transforming ideas into exceptional web and mobile app experiences.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src={icoDesign} alt="Design & Creative" />
          <ServiceTitle>
            Design & Creative
          </ServiceTitle>
          <ServiceDescription>
            Crafting visually stunning designs that connect with your audience.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon src={icoDevelopment} alt="Development" />
          <ServiceTitle>
            Development
          </ServiceTitle>
          <ServiceDescription>
            Bringing your vision to life with the latest technology and design trends.
          </ServiceDescription>
        </ServiceItem>
      </ServiceList>
    </ServicesContainer>
  );
}

export default Services;
