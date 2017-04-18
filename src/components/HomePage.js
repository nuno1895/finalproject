
import './Nav.css';
import './HomePage.css';

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class HomePage extends Component {

  render() {
    let{mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = {resizeMode: 'cover' || 'contain'
    };
    let defaults = {
      height: height || 720,
    };

    let important = {
      backgroundImage: `url(./images/smallergirl.jpg)`,
      backgroundRepeat: 'no-repeat',
      BackgroundSize: 'cover'
    };

    return (

      <div>
        <Jumbotron className="jumboHome">
        {/*<div id='bkround' className="bkgroun" style={{backgroundImage: `url(./images/girl.jpg)`}}>*/}
        <div {...props} style={{...style, ...defaults, ...important}}>
          <Container className="homeContainerOne">
            <Row>
              <Col>
                <h1 className="hp-title"><strong>PAY OFF YOUR DEBT</strong></h1>
                <div className="hp-title-p">
                <h4 className="hp-title-p">Real solutions to help you pay off your debt and make smarter financial decisions</h4>
                </div>
                <p>
                  <Button
                    className="getStart"
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    GET STARTED
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
          </div>
          </Jumbotron>
      </div>
    );
  }
}

export default HomePage;










