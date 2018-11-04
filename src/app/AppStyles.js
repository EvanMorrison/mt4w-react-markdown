import styled from 'react-emotion';

// theme settings used with Emotion

export const theme = {
  primary: '#333366',
  primaryText: 'rgba(0,0,0,.87)',
  contrastText: '#FFFFFF',
  logoBlue: '#43C7ED',
  logoOrange: '#FF7D09',
  logoGreen: '#66C368',
  blueLt: 'rgb(200, 200, 250)',
  titleFont: 'Philosopher',
  headingFont: 'Montserrat',
  bodyFont: 'Roboto',
  menuFont: 'Roboto'
};

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  flex: 1;
`;

export const RowCentered = styled(Row)`
  justify-content: center;
  align-content: center;
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
`;

export const Section = styled(Column)`
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 270px);
  margin: 0 auto;
  padding: 50px 10%;
  border-radius: 100% 0 100% 0/ 100px 0 200px 0;
  ${props => props.topcolor && `border-top: 8px solid ${props.topcolor}`};
  ${props => props.bottomcolor && `border-bottom: 12px solid ${props.bottomcolor}`};
`;

export const SectionTitle = styled.h1`
  position: relative;
  font-family: ${props => props.theme.titleFont};
  font-style: italic;
  font-size: 3em;
  margin: 1em 0 1em;
  transition: all 0.2s ease-out;

  &:after {
    content: '';
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 50px;
    display: inline-block;
    width: 150px;
    height: ${props => props.image ? 100 : 0}px;
    box-shadow: ${props => props.image && '2px 2px 2px #555'};
    border-radius: 2px 50%/ 20% 20px;
  }

  @media (max-width: 428px) {
    font-size: 1.6em;
  }

  @media (min-width: 428px) and (max-width: 667px) {
    font-size: 2em;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 3em;
  }

  @media (max-width: 1023px) {
    &:after {
      position: relative;
      transform: translateY(0);
      display: block;
      left: -50px;
      margin-right: 0;
    }
  }
`;

export const SectionBody = styled.div`
  margin-bottom: 100px;
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.textFont};
  font-size: 1.15em;
  font-weight: 300;
  line-height: 1.5em;
  max-width: 38em;
  text-align: justify;
  margin-top: 2em;

  &:first-of-type {
    margin-top: 0;
  }
`;
