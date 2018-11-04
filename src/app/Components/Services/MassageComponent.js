import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class MassageComponent extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SectionTitle image={this.props.info.image}>Massage</SectionTitle>
        <SectionBody>
          <Paragraph>
            The benefits of massage are well known and are significant. New science and research continues to suggest that incorporating massage therapy into your wellness regimen can be very beneficial. Many massage therapy modalities have been created to aid the body through specific techniques, such as: Swedish Massage, Deep Tissue Massage, and many others.
          </Paragraph>
          <Paragraph>
            At MT4W we incorporate techniques from various modalities to deliver a medical massage experience customized to your specific needs and body type. Your therapist will take the time to learn your relevant physical and medical history so that she can tailor your treatment to provide relief where it‘s needed most: whether it‘s tight shoulders, an achy neck or back, sore muscles after a workout, or stiffness in a hip or legs.
          </Paragraph>
          <Paragraph>
            Sometimes the real source of tightness or pain is not what it first appears, and your therapist is expert at evaluating the whole picture to identify the root sources and treat them directly.
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
