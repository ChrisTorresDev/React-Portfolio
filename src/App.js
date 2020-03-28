import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
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
    border-top: 1px solid #15519c;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Styles>
        <Navigationbar />
        <Jumbotron />
        <Container>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
            <div>
              <Resume />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div>
              <About />
            </div>
            <div>
              <Contact />
            </div>
          </Layout>
          <Footer />
        </Container>
      </Styles>
    </React.Fragment>
  );
}

export default App;
