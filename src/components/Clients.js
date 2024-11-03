import React from 'react';
import styled from 'styled-components';

const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px 20px;
  background-color: #f8f8f8;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  height: 200px;
  margin-top: -50px;
  position: relative;
  z-index: -1;
`;

const ClientLogo = styled.img`
  margin-top: 100px;
  width: 100px;
`;

function Clients() {
  return (
    <ClientsContainer>
      <ClientLogo src="logo1.png" alt="National Bank" />
      <ClientLogo src="logo2.png" alt="Coca-Cola" />
      <ClientLogo src="logo3.png" alt="Adobe" />
      <ClientLogo src="logo4.png" alt="Subway" />
      <ClientLogo src="logo5.png" alt="Codecademy" />
    </ClientsContainer>
  );
}

export default Clients;