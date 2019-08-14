import appdata from '../../../content/appState';
import content from '../../../content/about.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/core';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

const AboutComponent = (props) => {
  return (
    <Section topcolor="logoGreen">
      <SectionTitle>About</SectionTitle>
      <SectionBody>
        <img src={appdata.trishPortrait} alt="Trish Romano" css={css`
          float: left;
          margin: 0 20px 0 0;
          width: 170px;

          @media (max-width: 426px) { width: 120px; }
        `}/>
        <Paragraph>
          <ReactMarkdown source={content} escapeHtml={false}/>
        </Paragraph>
      </SectionBody>
    </Section>
  );
};

export default AboutComponent;
