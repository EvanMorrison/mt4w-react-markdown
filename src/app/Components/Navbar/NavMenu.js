import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavEntries from './NavMenuData';
import Popover from 'material-ui/Popover';
import React from 'react';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';

const NavList = styled.ul`
  * {
    list-style: none;
  }

  > li {
    display: inline-block;
    color: ${props => props.position === 1 ? props.theme.contrastText : props.theme.primaryText};
    margin-right: 2px;
    transition: all 0.2s linear;

    a {
      display: inline-block;
      padding: 8px 20px;
      border-radius: 3px;

      &:hover, &.active {
        background: ${props => rgba(props.theme.blueLt, 0.3)};
        transition: all 0.2s linear;
      }
    }

    ${''/* show top-level menu icons only on mobile */}

    [class^='icon-'] {
      display: ${props => props.isMobile ? 'inline-block' : 'none'};
      color: ${props => props.theme.primaryText} !important;
    }
  }

  @media (max-width: 1023px) {
    margin-top: 50px;

    li {
      display: block;

      * {
        font-size: 1em;
        line-height: 2em;
      }
    }
  }
`;

const Icon = styled.span`
  position: relative;
  left: -8px;
  font-size: 20px !important;
`;

const NavItems = ({menuItems, ...props}) => {
  return(menuItems.map(m => (
    <li key={m.label}
      onMouseEnter={(m.children ? props.openPopoverMenu : props.closePopoverMenu)}
      onClick={props.handleClick}>
      <NavLink to={m.path} exact={(m.path === '/')}>
        <Icon className={`icon-${m.icon}`}/>
        {m.label}
      </NavLink>
      {
        (m.children
          ? props.isMobile
            ? (
              <ul style={{marginLeft: '24px'}}>
                <NavItems {...props} menuItems={m.children} />
              </ul>
            )
            : <Submenu {...props} menuItem={m}/>
          : ''
        )
      }
    </li>
  )));
};

const Submenu = ({menuItem, ...props}) => {
  return(
    <Popover open={props.servicesOpen && props.anchorEl && props.anchorEl.children[0].textContent === menuItem.label}
      anchorEl={props.anchorEl}
      anchorOrigin={props.anchorOrigin}
      targetOrigin={props.targetOrigin}
      useLayerForClickAway={false}
      onRequestClose={props.closePopoverMenu}>
      <Menu onMouseLeave={props.closePopoverMenu}
        desktop={true}
        onClick={props.handleClick}>
        <NavLink to={menuItem.path}>
          <MenuItem onClick={props.closePopoverMenu}
            value={0}
            primaryText={menuItem.label}
            leftIcon={<Icon className={`icon-${menuItem.icon}`}/>}/>
        </NavLink>
        {menuItem['children'].map((m, i) => {
          return(
            <NavLink key={i} to={m.path}>
              <MenuItem
                onClick={props.closePopoverMenu}
                value={i + 1}
                primaryText={m.label}
                leftIcon={<i className={`icon-${m.icon}`} ></i>}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Popover>
  );
};

class NavMenu extends React.Component {
  state = {
    servicesOpen: false,
    anchorEl: null
  }

  openPopoverMenu = event => {
    event.preventDefault();
    this.setState({servicesOpen: true, anchorEl: event.currentTarget});
  }

  closePopoverMenu = () => {
    if(!this.props.isDrawerOpen) this.setState({servicesOpen: false});
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => { // eslint-disable-line camelcase
    if(!this.props.isDrawerOpen && nextProps.isDrawerOpen) {
      this.setState({servicesOpen: true, anchorEl: this.refs.submenuAnchor}); // eslint-disable-line react/no-string-refs
    } else if(!this.props.isDrawerOpen || !nextProps.isDrawerOpen) {
      this.setState({servicesOpen: false});
    }
  }

  render() {
    return(
      <nav className="navbar">
        <NavList position={this.props.position}
          isMobile={this.props.isMobile}>
          <NavItems {...this.props}
            {...this.state}
            menuItems={NavEntries}
            openPopoverMenu={this.openPopoverMenu}
            closePopoverMenu={this.closePopoverMenu}
          />
        </NavList>
      </nav>
    );
  }
}

Submenu.propTypes = {
  anchorEl: PropTypes.object,
  anchorOrigin: PropTypes.object,
  closePopoverMenu: PropTypes.func,
  handleClick: PropTypes.func,
  menuItem: PropTypes.object,
  servicesOpen: PropTypes.bool,
  targetOrigin: PropTypes.object
};

NavMenu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  position: PropTypes.number.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  targetOrigin: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

export default NavMenu;
