import content from '../../../content/massage.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class MassageComponent extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SectionTitle image={this.props.info.image}>Massage</SectionTitle>
        <SectionBody>
          <Paragraph>
            <ReactMarkdown source={content} escapeHtml={false}/>
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
};

MassageComponent.propTypes = {
  info: PropTypes.object
};

export default MassageComponent;
