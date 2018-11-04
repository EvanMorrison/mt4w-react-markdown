import Map from './Map';
import React from 'react';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { Row, Column } from '../../AppStyles';

const bgimage = require('../../../assets/images/relaxation-686392_1080x720.jpg');

const LocationWrapper = styled(Row)`
  @media (max-width: 426px) {
    padding-top: 80px;
  }

  min-height: 600px;
  border-radius: 90% 0 0 0 / 150px 0 0 0;
  border-top: 12px solid ${props => rgba(props.theme.logoOrange, 0.8)};
  background-image:
    linear-gradient(
      to bottom,
      ${props => rgba(props.theme.blueLt, 0.7)} 67%,
      ${props => rgba(props.theme.blueLt, 0.5)}
    ),
    url(${bgimage});
  background-size: cover;
`;

const SectionHeading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  text-align: center;
  margin-bottom: 80px;
`;

class LocationComponent extends React.Component {
  render() {
    return(
      <LocationWrapper>
        <Column >
          <SectionHeading>Where to Find Us</SectionHeading>
          <Map />
        </Column>
      </LocationWrapper>
    );
  }
}

export default LocationComponent;
