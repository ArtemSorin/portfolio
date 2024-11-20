import React from 'react';
import styled from 'styled-components';

import icoBSAARC from '../images/BSAARC.svg';

const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
  background-color: #f8f8f8;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  height: 250px;
  margin-top: -50px;
  position: relative;
  z-index: -1;
`;

const ClientLink = styled.a`
  margin-top: 80px;
  display: inline-block;
  z-index: 19;
  position: relative;
`;

const ClientLogo = styled.img`
  width: 100px;
  cursor: pointer;
`;

function Clients() {
  return (
    <ClientsContainer>
      <ClientLink href="https://bsaarc.sfedu.ru/?page_id=24647" target="_blank" rel="noopener noreferrer">
        <ClientLogo src={icoBSAARC} alt="BSAARC" />
      </ClientLink>
    </ClientsContainer>
  );
}

export default Clients;
