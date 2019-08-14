import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const PopoverStyle = styled('div')`
  position: absolute;
  visibility: ${props => props.height ? 'visible' : 'hidden'};
  opacity: ${props => props.height ? 1 : 0};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transition: height 0.1s ease-in-out, width 0.1s ease-in-out, opacity 0.1s ease-out, top 0s 0.2s linear;
  background-color: #FFFFFF;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  ul, li, a {
    opacity: ${props => props.height ? 1 : 0};
    width: ${props => props.width}px;
    height: ${props => props.height / 4}px;
    white-space: nowrap;
    transition: height 0.2s 0.1s ease-out, width 0.2s 0.1s ease-out, opacity 0.1s 0.1s ease-out;
  }
`;

class Popover extends Component {
  state = {
    height: 0,
    width: 0
  }

  componentDidUpdate = (prevProps) => {
    if (!prevProps.open && this.props.open) {
      this.setState({height: 220, width: 240});
    } else if (prevProps.open && !this.props.open) {
      this.setState({height: 0, width: 0});
    }
  }

  render() {
    return (
      <PopoverStyle isOpen={this.props.open} height={this.state.height} width={this.state.width}>
        <div css={css`position: relative;`}>
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
