import appdata from '../../../content/appState';
import React from 'react';
import styled from 'react-emotion';
import { Row, Column } from '../../AppStyles';

const ContactSection = styled(Row)`
  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-start;
    padding-top: 80px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 80%;
  }

  position: relative;
  min-height: 500px;
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  font-family: ${props => props.theme.headingFont};
  align-items: center;
  justify-content: flex-start;

  * {
    transition: all 0.3s ease-out;
  }
`;

const Portrait = styled.img`
  display: block;
  flex-basis: 150px;
  width: 150px;
  height: 200px;
  margin-right: 30px;
  border-radius: 5px;
`;

const Headline = styled.div`
  @media (max-width: 500px) {
    font-size: 1em;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    font-size: 1.125em;
  }

  font-size: 1.25em;
  font-weight: 300;
`;

const Name = styled.div`
  @media (max-width: 500px) {
    font-size: 1.9em;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    font-size: 2.5em;
  }

  font-size: 3.2em;

  strong {
    font-weight: 700;
  }
`;

const ContactComponent = () => (
  <ContactSection>
    <Portrait src={appdata.trishPortrait} alt=""/>
    <Column>
      <Headline>
        Founder & Principal Care Provider
      </Headline>
      <Name>
        <strong>Trish Romano</strong>, CLT LMT
      </Name>
      <Headline>
        <table>
          <tbody>
            <tr><td><i className="icon-phone"></i></td><td css={{paddingLeft: '12px'}}>310-283-9382</td></tr>
            <tr><td><i className="icon-mail_outline"></i></td><td css={{paddingLeft: '12px'}}><a href="mailto:trish@mt4w.com">trish@mt4w.com</a></td></tr>
            <tr><td><i className="icon-pin_drop"></i></td><td css={{paddingLeft: '12px'}}>9815 East Bell Road, Suite 110</td></tr>
            <tr><td><i></i></td><td css={{paddingLeft: '12px'}}>Scottsdale, AZ 85260</td></tr>
          </tbody>
        </table>
      </Headline>
    </Column>
  </ContactSection>
);

export default ContactComponent;
