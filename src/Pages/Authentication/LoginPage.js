import React from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './LoginPage.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passHidden: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    localStorage.setItem('token', 'sgdhdngf');
    window.location.reload();
  };

  render() {
    return (
      <div id="login-wrapper">
        <div className="app flex-row align-items-center login-bg">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="10" md="12" sm="12">
                <CardGroup className="authGroup">
                  <Card className="p-5 loginOrder">
                    <CardBody className="loginPageSize">
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" name="email" className="inputFocus" onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type={this.state.passHidden ? 'password' : 'text'}
                          placeholder="Password"
                          name="password"
                          className="inputFocus"
                          onChange={this.handleChange}
                        />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <div className="icon-parts" onClick={() => this.setState({ passHidden: !this.state.passHidden })}>
                              <i className={this.state.passHidden ? 'fa fa-eye-slash' : 'fa fa-eye'} />
                            </div>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button value="Submit" color="primary" className="px-4" onClick={this.handleSubmit}>
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 regOrder">
                    <CardBody className="text-center">
                      <div>
                        <h2>Welcome</h2>
                        <p>React Admin Portal</p>
                        <Button color="primary" className="mt-3" active>
                          Admin
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;
