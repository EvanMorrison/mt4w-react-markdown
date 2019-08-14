import moment from "moment";
import React from 'react';
import styled from 'react-emotion';
import { rgba } from 'polished';

import { Row, Column } from '../AppStyles';

const FooterWrapper = styled(Row)`
  height: 120px;
  width: 100%;
  padding: 0 80px;
  background: ${props => rgba(props.theme.primary, 0.8)};
  align-content: center;
  justify-content: space-between;

  div {
    flex: 1;
    display: flex;
    margin: auto;
    max-width: 1280px;
    justify-content: flex-start;

    span {
      margin-right: 30px;
      color: ${() => rgba('#FFFFFF', 0.4)};
    }
  }
`;

const SocialLink = styled.a`
  align-self: flex-end;
  text-decoration: none;

  i {
    color: white;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      <Column>
        <Row>
          <span>&copy;{moment().format('YYYY')}</span>
          <span>MT4W, LLC</span>
        </Row>
      </Column>
      <Column>
        <SocialLink href=""><i className="icon-facebook-square"></i> </SocialLink>
      </Column>
    </div>
  </FooterWrapper>
);

export default Footer;
