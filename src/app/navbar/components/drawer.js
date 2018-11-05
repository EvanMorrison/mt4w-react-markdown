import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'react-emotion';

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
  state = {
    isOpen: this.props.open
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.open !== this.props.open) {
      this.setState({isOpen: true});
    }
  }

  closeDrawer = () => {
    this.setState({isOpen: false});
  }

  render() {
    return(
      <div>
        <Overlay onClick={this.closeDrawer} isOpen={this.state.isOpen}/>
        <DrawerStyle isOpen={this.state.isOpen}>
          {this.props.children}
        </DrawerStyle>
      </div>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.array
};
