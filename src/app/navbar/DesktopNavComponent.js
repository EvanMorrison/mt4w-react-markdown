import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Row } from '../AppStyles';
import NavMenu from './NavMenu';
import styled from 'react-emotion';

const DesktopNavWrapper = styled(Row)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  /* * {
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primary};
  } */

  @media (max-width: 1023px) {
    display: none;
  }
`;

class DesktopNavComponent extends Component {
  render() {
    return(
      <DesktopNavWrapper position={this.props.position}>
        <NavMenu position={this.props.position}/>
      </DesktopNavWrapper>
    );
  }
}

DesktopNavComponent.propTypes = {
  position: PropTypes.number
};

export default DesktopNavComponent;
