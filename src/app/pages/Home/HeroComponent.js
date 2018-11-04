import appState from '../../../content/appState';
import hero from '../../../assets/images/background-1998454_980.jpg';
import PanelComponent from './PanelComponent';
import React from 'react';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import {theme} from '../../AppStyles';

const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 80px 0 180px;
  background: transparent;
  justify-content: center;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.3;
    z-index: -1;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    border-radius: 100% 0 100% 0/ 100px 0 200px 0;
    border-top: 12px solid ${props => props.theme.logoGreen};
    border-bottom: 12px solid ${props => props.theme.logoBlue};
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

class HeroComponent extends React.Component {
  state = {
    panels: appState.homePage.heroPanels,
    routes: ['/services/massage', '/services/lymphatic', 'services/myofascial']
  }

  panelClick = (event, i) => {
    this.props.history.push(this.state.routes[i]);
  }

  render() {
    const panels = this.state.panels;
    const colors = [theme.logoGreen, theme.logoOrange, theme.logoBlue];
    return(
      <HeroSection>
        {panels.map((p, i) => {
          return(<PanelComponent key={i} props={p} color={colors[i]} onClick={(e) => this.panelClick(e, i)}/>);
        })}
      </HeroSection>
    );
  }
};

HeroComponent.propTypes = {
  history: PropTypes.object,
};

export default withRouter(HeroComponent);
