import React from 'react';
import { Container } from 'react-bootstrap';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { Navigationbar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  hr {
    border-top: 1px solid #15519C;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <Navigationbar />
        <Jumbotron />
        <Container>
            <div>
              <Home />
            </div>
            <div id="resume">
              <Resume />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="contact">
              <Contact />
            </div>
          <Footer />
        </Container>
      </Styles>
    </React.Fragment>
  );
}

export default App;
