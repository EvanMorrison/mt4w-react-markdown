import React from 'react';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

class ServicesComponent extends React.Component {
  render() {
    return(
      <React.Fragment>
        <SectionTitle>Services</SectionTitle>
        <SectionBody>
          <Paragraph>
            Manual Therapy for Wellness provides several services at competetive rates that provide synergistic benefits, relief from pain and stress, improved mobility, strengthened immune system, and reduction of swelling.
          </Paragraph>
          <Paragraph>
            More information will be provided here in the future. But for now please call 310-283-9382 to learn more about what services and packages are available.
          </Paragraph>
          <Paragraph>
            Manual therapy, including massage, makes a wonderful gift. Gift certificates are available for purchase upon request.
          </Paragraph>
        </SectionBody>
      </React.Fragment>
    );
  }
}

export default ServicesComponent;
