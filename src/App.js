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


function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
