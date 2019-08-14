import React from 'react';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';
import { Column } from '../AppStyles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  max-width: 1280px;
  margin: 0 auto;
`;

const logo = require('../../assets/logo_sm.png');

const Brand = styled.div`
  position: fixed;
  transform-origin: -100px top;
  transform:
    scale(${props => (1 - props.position > 0.75) ? 1 - props.position : 0.75})
    translateY(${props => -23 * (props.position)}px)
    translateX(${props => -10 * (props.position)}px);
  opacity: ${props => (props.position === 1) ? 0 : 1};
  min-width: 7em;
  margin-left: 150px;
  z-index: -1;
  transition: all 0.2s ease-out;

  &:after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    z-index: 10;
    background: no-repeat center/contain url(${logo});
    top: 0;
    bottom: 0;
    left: -115px;
    margin: auto 0;
  }

  @media (max-width: 426px) {
    margin-left: 80px;
    font-size: 70%;

    &:after {
      width: 65px;
      left: -65px;
    }
  }
`;

const BrandName = styled.h1`
  font-family: ${props => props.theme.titleFont};
  font-size: 2.5em;
`;

const Tagline = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.1em;
`;

class HeadingComponent extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <Column>
          <Brand position={this.props.position}>
            <BrandName><em>Manual Therapy <br/> For Wellness </em></BrandName>
            <Tagline>Treating Muscle, Fascia, Lymph </Tagline>
          </Brand>
        </Column>
      </StyledWrapper>
    );
  }
}

HeadingComponent.propTypes = {
  position: PropTypes.number
};

export default HeadingComponent;
