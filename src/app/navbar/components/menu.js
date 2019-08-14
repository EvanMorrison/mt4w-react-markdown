import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Menu extends Component {
  render() {
    return (
      <ul onMouseLeave={this.props.onMouseLeave}>
        {this.props.children}
      </ul>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.array,
  onMouseLeave: PropTypes.func
};

export default Menu;
