import React from 'react';
import { Link } from 'react-router-dom';

class DefaultFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span>
          <Link to="#">React Admin</Link> &copy; Template
        </span>
      </React.Fragment>
    );
  }
}

export default DefaultFooter;
