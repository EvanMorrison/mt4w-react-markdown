import MassageComponent from './MassageComponent';
import MLDComponent from './MLDComponent';
import MyofascialComponent from './MyofascialComponent';
import React from 'react';
import ServicesComponent from './ServicesComponent';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { Section } from '../../AppStyles';
import { withTheme } from 'emotion-theming';

import appState from '../../../data/appState';

const StyledList = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    display: inline-block;
    margin-right: 5px;
    font-size: 18px;
    &:first-child { color: ${props => props.theme.logoGreen}; }
    &:nth-child(2) { color: ${props => props.theme.logoOrange}; }
    &:last-child { color: ${props => props.theme.logoBlue}; }
    &.active { text-decoration: underline; }

    @media (max-width: 540px) {
      display: block;
    }
  }
`;

class ServicesContainer extends React.Component {
  render() {
    const props = appState.homePage.heroPanels;
    return(
      <Section topcolor={this.props.theme.logoBlue}>
        <nav>
          <StyledList>
            <li><NavLink to="/services/massage">Massage | </NavLink></li>
            <li><NavLink to="/services/lymphatic">Lymphatic Drainage | </NavLink></li>
            <li><NavLink to="/services/myofascial">Myofascial Release</NavLink></li>
          </StyledList>
        </nav>
        <Route exact path="/services" component={ServicesComponent} />
        <Route path='/services/massage' render={() => <MassageComponent info={props[0]} />} />
        <Route path='/services/lymphatic' render={() => <MLDComponent info={props[1]} />} />
        <Route path='/services/myofascial' render={() => <MyofascialComponent info={props[2]} />} />
      </Section>
    );
  }
}

ServicesContainer.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(ServicesContainer);
