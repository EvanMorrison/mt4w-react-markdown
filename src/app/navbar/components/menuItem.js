import React, { Component } from 'react';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';

const ItemStyle = styled('li')`
  width: 100%;
`;

class MenuItem extends Component {
  render() {
    return (
      <ItemStyle {...this.props}>
        {this.props.children}
      </ItemStyle>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  leftIcon: PropTypes.object,
  primaryText: PropTypes.string
};

export default MenuItem;
