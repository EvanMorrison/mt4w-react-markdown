import React from 'react';
import { PropTypes } from 'prop-types';
import { SectionTitle, SectionBody, Paragraph } from '../../AppStyles';

const MyofascialComponent = ({info}) => {
  return(
    <React.Fragment>
      <SectionTitle image={info.image}>Myofascial Release</SectionTitle>
      <SectionBody>
        <Paragraph>
          Myofascial Release is a safe and very effective hands-on technique that involves applying gentle sustained pressure into the connective tissue restrictions to eliminate pain and restore motion.
        </Paragraph>
        <Paragraph>
          Fascia is a specialized system of the body that is very densely woven connective tissue, covering and interpenetrating every muscle, bone, nerve, artery and vein. Trauma, inflammatory responses, and/or surgical procedures create myofascial restrictions that can produce pressures on pain sensitive structures that do not show up in many of the standard tests. A high percentage of people suffering with pain and/or lack of motion may be having undiagnosed fascial problems.
        </Paragraph>
        <Paragraph>
          The relief experienced from Myofascial Release can be incredible, with benefits including dramatically increased mobility, stability, and functional strength.
        </Paragraph>
      </SectionBody>
    </React.Fragment>
  );
};

MyofascialComponent.propTypes = {
  info: PropTypes.object
};

export default MyofascialComponent;
