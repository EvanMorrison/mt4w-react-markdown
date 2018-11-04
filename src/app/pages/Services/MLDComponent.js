import content from '../../../content/mld.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class MLDComponent extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SectionTitle image={this.props.info.image}>Manual Lymphatic Drainage</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
};

MLDComponent.propTypes = {
  info: PropTypes.object
};

export default MLDComponent;
