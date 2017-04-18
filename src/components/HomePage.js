
import './Nav.css';
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
    return (
      const background = {
        backgroundImage: '../images/girl.jpg(' + imgUrl + ')',
      };
      <div>

        <Jumbotron>
          <Container>
          <div style={background}></div>;
            <Row>
              <Col>
                <h1></h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;