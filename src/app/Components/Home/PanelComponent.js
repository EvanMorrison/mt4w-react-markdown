import React from 'react';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';
import { rgba } from 'polished';
import { Column } from '../../AppStyles';

const Panel = styled.div`
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  background: ${props => rgba(props.theme.blueLt, 0.7)};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 1099px) {
    flex: 0 0 30%;
    width: 90%;
    max-width: 400px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1100px) {
    flex: 0 0 30%;
    max-width: 400px;
    height: 680px;
  }
`;

const PanelHeading = styled.h2`
  width: 100%;
  height: 84px;
  line-height: 84px;
  font-family: ${props => props.theme.titleFont};
  font-size: 2.2em;
  text-align: center;
  color: ${props => props.color};
  text-shadow: 1px 1px #222244;
  background-image: linear-gradient(to bottom, ${props => rgba(props.theme.primary, 0.4)}, ${props => rgba(props.theme.primary, 0.4)} 10%, ${props => rgba(props.theme.primary, 0.5)} 90%);
`;

const PanelImg = styled.img`
  max-height: 250px;
  min-width: 100%;

  @media screen and (max-width: 1099px) {
    max-height: 200px;
    min-width: auto;
    position: relative;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const PanelContent = styled(Column)`
  padding: 20px 40px;
  margin-bottom: 20px;
`;

const PanelSubtitle = styled.h2`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.5em;
  opacity: 0.87;
  margin-bottom: 15px;
`;

const PanelText = styled.p`
  font-family: ${props => props.theme.bodyFont};
  ${''/* text-align: justify; */}
  font-size: 1.2em;
  font-weight: 300;
  opacity: 0.87;
  line-height: 1.5em;
`;

const PanelComponent = ({props, color, onClick}) => (
  <Panel onClick={onClick}>
    <PanelHeading color={color}>
      <em>{props.title}</em>
    </PanelHeading>
    <PanelImg src={props.image} alt=""/>
    <PanelContent>
      <PanelSubtitle >{props.subtitle}</PanelSubtitle>
      <PanelText>{props.text} </PanelText>
    </PanelContent>
  </Panel>
);

PanelComponent.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.object,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default PanelComponent;
