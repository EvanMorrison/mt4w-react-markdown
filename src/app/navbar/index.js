import DesktopNavComponent from './DesktopNavComponent';
import logo from '../../assets/logo_sm.png';
import MobileNavComponent from './MobileNavComponent';
import React from 'react';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';
import { rgba } from 'polished';
import { Row, Column } from '../AppStyles';

const CustomNavbar = styled(Row)`
  @media (min-width: 426px) {
    padding: 0 24px;
  }

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: ${props => rgba(props.theme.primary, (props.position >= 1 ? 0.7 : 0))} !important;
  ${''/* background-image: linear-gradient(to bottom,
                    ${props => rgba(props.theme.primary,.2)},
                    ${props => rgba(props.theme.primary,.4)} 30%,
                    ${props => rgba(props.theme.primary,.6)} 90%); */}
  box-shadow: 0 2px 4px ${props => rgba('#555555', (props.position === 1 ? 1 : 0))};
  height: 100px !important;
  transition: all 0.2s linear;
`;

const NavbarContentContainer = styled(Row)`
  flex: 1;
  max-width: 1280px;
  margin: auto;
  justify-content: space-between;
`;

const BrandGroup = styled(Row)`
  transition: all 0.2s ease-out;

  @media (max-width: 426px) {
    font-size: 0.8em;
  }

  position: relative;
  top: 0;
  opacity: ${props => props.position === 1 ? 1 : 0};
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  padding: 6px;
`;

const NavTitle = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 1.8em;
  color: ${props => props.theme.contrastText};
  width: 8em;
  word-wrap: break-word;
`;

const NavSubtitle = styled.h4`
  margin-top: 5px;
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.contrastText};
  min-width: 17em;
`;

const NavContact = styled.p`
  color: ${props => rgba(props.theme.contrastText, 0.87)};
  font-size: 1.2em;
  position: relative;
  margin: 0 auto 30px;

  @media (max-width: 500px) {
    display: none;
  }
`;

class Navbar extends React.Component {
  render() {
    return(
      <CustomNavbar position={this.props.position}>
        <NavbarContentContainer>
          <BrandGroup position={this.props.position}>
            <Logo src={logo} alt="logo"/>
            <Column>
              <NavTitle >
                <em>Manual Therapy For Wellness</em>
              </NavTitle>
              <NavSubtitle>
              Treating Muscle, Fascia, Lymph
              </NavSubtitle>
            </Column>
          </BrandGroup>
          <Row>
            <Column>
              <NavContact>Call: 310-283-9382</NavContact>
              <DesktopNavComponent position={this.props.position}/>
              <MobileNavComponent position={this.props.position}/>
            </Column>
          </Row>
        </NavbarContentContainer>
      </CustomNavbar>
    );
  }
}

Navbar.propTypes = {
  position: PropTypes.number
};

export default Navbar;
