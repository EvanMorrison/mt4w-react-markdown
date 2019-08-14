import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

const Overlay = styled('div')`
  position: fixed;
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.54);
  top: 0;
  left: 0;
`;

const DrawerStyle = styled('div')`
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  transition: left 0.3s linear;
  left: ${props => props.isOpen ? 0 : '-250px'};
  background-color: #FFFFFF;
`;

export default class Drawer extends Component {
  render() {
    return (
      <div>
        <Overlay onClick={this.props.closeDrawer} isOpen={this.props.open}/>
        <DrawerStyle isOpen={this.props.open}>
          {this.props.children}
        </DrawerStyle>
      </div>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.array,
  closeDrawer: PropTypes.func
};
