import content from '../../../content/myofascial.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

const MyofascialComponent = ({info}) => {
  return (
    <React.Fragment>
      <SectionTitle image={info.image}>Myofascial Release</SectionTitle>
      <SectionBody>
        <Paragraph>
          <ReactMarkdown source={content} escapeHtml={false}/>
        </Paragraph>
      </SectionBody>
    </React.Fragment>
  );
};

MyofascialComponent.propTypes = {
  info: PropTypes.object
};

export default MyofascialComponent;
