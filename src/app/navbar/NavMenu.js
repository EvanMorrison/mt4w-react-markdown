import Menu from './components/menu';
import MenuItem from './components/menuItem';
import NavEntries from './NavMenuData';
import Popover from './components/popover';
import React from 'react';
import styled from 'react-emotion';
import { css, cx } from 'emotion';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
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
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 20px;
      border-radius: 3px;

      &:hover, &.active {
        background: ${props => rgba(props.theme.blueLt, 0.3)};
        transition: all 0.2s linear;
      }
    }

    /* show top-level menu icons only on mobile */
    [class^='icon-']:not(.submenu) {
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

const NavItems = ({menuItems, ...props}) => {
  return(menuItems.map(m => (
    <li key={m.label}
      onMouseEnter={(m.children ? props.openPopoverMenu : props.closePopoverMenu)}
      onClick={props.handleClick}>
      <NavLink to={m.path} exact={(m.path === '/')}>
        <i className={`icon-${m.icon}`}>{m.icon}</i>
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
          : null
        )
      }
    </li>
  )));
};

const Submenu = ({menuItem, ...props}) => {
  return(
    <Popover open={props.popoverOpen}
      render={(popoverState) => (
        <Menu onMouseLeave={props.closePopoverMenu}
          onClick={props.handleClick}
          {...popoverState}>
          <MenuItem onClick={props.closePopoverMenu}
            {...menuItem}>
            <Link to={menuItem.path}>
              <span css={css`* {color: #000000;}`}>
                <i className={`icon-${menuItem.icon}`}>{menuItem.icon}</i>
                <span>{menuItem.label}</span>
              </span>
            </Link>
          </MenuItem>
          {menuItem['children'].map((m, i) => {
            return(
              <MenuItem
                key={m.label}
                onClick={props.closePopoverMenu}>
                <NavLink to={m.path}>
                  <i className={cx(`icon-${m.icon} submenu`, css`display: inline-block; position: relative; left: -8px; font-size: 20px;`)} >{m.icon}</i>
                  <span css={{color: '#000000'}}>{m.label}</span>
                </NavLink>
              </MenuItem>
            );
          })}
        </Menu>
      )
      }/>
  );
};

class NavMenu extends React.Component {
  state = {
    popoverOpen: false,
  }

  openPopoverMenu = event => {
    event.preventDefault();
    this.setState({popoverOpen: true});
  }

  closePopoverMenu = () => {
    console.log('close menu');
    if(!this.props.isDrawerOpen) this.setState({popoverOpen: false});
  }

  componentDidUpdate = (prevProps) => {
    if(!this.props.isDrawerOpen && prevProps.isDrawerOpen) {
      this.setState({popoverOpen: true}); // eslint-disable-line react/no-string-refs
    } else if(this.props.isDrawerOpen !== prevProps.isDrawerOpen && prevProps.isDrawerOpen) {
      this.setState({popoverOpen: false});
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
  closePopoverMenu: PropTypes.func,
  handleClick: PropTypes.func,
  menuItem: PropTypes.object,
  popoverOpen: PropTypes.bool,
};

NavMenu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  position: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

export default NavMenu;
