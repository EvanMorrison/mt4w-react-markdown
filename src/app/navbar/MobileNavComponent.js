import Drawer from './components/drawer';
import logo from '../../assets/logo_sm.png';
import NavMenu from './NavMenu';
import React, { Component } from 'react';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { Row } from '../AppStyles';
import { PropTypes } from 'prop-types';

const Navbutton = styled(Row)`
  position: relative;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .icon-menu {
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primary} !important;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DrawerHeader = styled(Row)`
  background: ${props => rgba(props.theme.primary, 0.8)};
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px;
`;

class MobileNavComponent extends Component {
  state = { isDrawerOpen: false }

  toggleDrawer = event => {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen});
  }

  render() {
    return(
      <Navbutton position={this.props.position} >
        <i className="icon-menu"
          css={{color: 'inherit'}}
          onClick={this.toggleDrawer}>
          menu
        </i>

        <Drawer open={this.state.isDrawerOpen}>
          <DrawerHeader>
            <Logo src={logo}/>
          </DrawerHeader>
          <NavMenu position={0}
            isDrawerOpen={this.state.isDrawerOpen}
            isMobile={true}
            handleClick={this.toggleDrawer}/>
        </Drawer>
      </Navbutton>
    );
  }
}

MobileNavComponent.propTypes = {
  position: PropTypes.number
};

export default MobileNavComponent;
