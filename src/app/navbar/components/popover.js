import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'react-emotion';

const PopoverStyle = styled('div')`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: 'flex';
  transition: height 0.1s ease-in-out, width 0.1s ease-in-out;
  background-color: #FFFFFF;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

class Popover extends Component {
  state = {
    isOpen: this.props.open,
    height: 0,
    width: 0
  }

  componentDidUpdate = (prevProps) => {
    if(!prevProps.open && this.props.open) {
      console.log('open menu');
      this.setState({isOpen: true, height: 180, width: 180});
    } else if(prevProps.open && !this.props.open) {
      console.log('close menu');
      this.setState({isOpen: false, height: 0, width: 0});
    }
  }

  render() {
    return(
      <PopoverStyle isOpen={this.state.isOpen} height={this.state.height} width={this.state.width}>
        <div className={css`position: relative;`}>
          {this.props.render(this.state)}
        </div>
      </PopoverStyle>
    );
  }
}

Popover.propTypes = {
  open: PropTypes.bool,
  render: PropTypes.func
};

export default Popover;
