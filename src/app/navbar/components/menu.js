import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'react-emotion';

const MenuStyle = styled('div')`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  height: ${props => props.isOpen ? '100%' : '0'};
  flex: 1;
  transition: height 0.5s ease-out;
`;

class Menu extends Component {
  render() {
    return(
      <MenuStyle {...this.props}>
        {this.props.children}
      </MenuStyle>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.array
};

export default Menu;
