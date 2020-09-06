import React from 'react';
import { Nav, Button } from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Logo from '../../Assets/Img/Logo.svg';
import Sygnet from '../../Assets/Img/Sygnet.svg';

const DefaultHeader = () => {
  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: Logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
        minimized={{ src: Sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar />
      <Nav className="ml-auto" navbar />
      <Button className="btnClass" color="primary" onClick={logoutHandler}>
        Log Out
      </Button>
    </React.Fragment>
  );
};

export default DefaultHeader;
