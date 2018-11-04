import infoWindowContent from './infoWindow';
import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from 'react-emotion';
import withGoogleApi from './GoogleApiComponent';
import Style from './map.style';

class MapContainer extends React.Component {
  mapNode = React.createRef();

  loadMap = () => {
    const google = this.props.google;
    const address = this.props.address;
    const mapRef = this.mapNode;
    const geocoder = new google.maps.Geocoder();
    if(address) {
      geocoder.geocode({address}, (results, status) => {
        let computedCenter;
        if(status === 'OK') computedCenter = results[0].geometry.location;
        initMap(computedCenter);
      });
    }
    const initMap = (mapCenter = this.props.center) => {
      const map = new google.maps.Map(mapRef, {
        zoom: this.props.zoom,
        center: mapCenter,
        gestureHandling: 'cooperative',
        scrollwheel: false,
        fullscreenControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          position: google.maps.ControlPosition.TOP_RIGHT
        }
      });
      const marker = new google.maps.Marker({
        position: mapCenter,
        map: map
      });
      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      // info window starts open
      infoWindow.open(map, marker);
      // reopen info window (if closed) on clicking the marker
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
      this.setState({
        map,
        marker,
        infoWindow
      });
    };
  }

  componentDidUpdate = (prevProps) => {
    if(!prevProps.google && this.props.google) {
      this.loadMap();
    }
  }

  render() {
    return(
      <Style>
        <div className={cx('map-group', css`height: 400px; width: 95%; max-width: 600px; margin: 0 auto;`)}
          ref={el => { this.mapNode = el; }}>
        </div>
      </Style>
    );
  }
}

MapContainer.defaultProps = {
  zoom: 13,
  // address: '9458 East Ironwood Square Drive, #102, Scottsdale, AZ 85258',
  address: '9815 East Bell Road, Suite 110, Scottsdale, AZ 85260',
  center: null
};

MapContainer.propTypes = {
  google: PropTypes.object,
  loaded: PropTypes.bool,
  zoom: PropTypes.number,
  address: PropTypes.string,
  center: PropTypes.object
};

export default withGoogleApi({
  apiKey: 'AIzaSyBYRJBr8_LNRSUzZUYSbxezDkMzA5d3qN8',

})(MapContainer);
