import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Clients from './components/Clients';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Clients />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
