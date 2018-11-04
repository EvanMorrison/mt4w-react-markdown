import content from '../../../content/services.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class ServicesComponent extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SectionTitle>Services</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
}

export default ServicesComponent;
