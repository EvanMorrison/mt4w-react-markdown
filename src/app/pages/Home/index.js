import React from 'react';
import HeroComponent from './HeroComponent';
import ContactComponent from './ContactComponent';
import LocationComponent from './LocationComponent';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <HeroComponent />
        <ContactComponent />
        <LocationComponent />
      </div>
    );
  }
}

export default HomeContainer;
