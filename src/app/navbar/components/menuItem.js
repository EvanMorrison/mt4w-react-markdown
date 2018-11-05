import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'react-emotion';

const ItemStyle = styled('div')`
  height: 2em;
  width: 100%;
`;

class MenuItem extends Component {
  render() {
    return(
      <ItemStyle>
        {this.props.leftIcon}
        {this.props.primaryText}
      </ItemStyle>
    );
  }
}

MenuItem.propTypes = {
  leftIcon: PropTypes.object,
  primaryText: PropTypes.string
};

export default MenuItem;
