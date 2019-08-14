import React from 'react';

const withGoogleApi = ({apiKey}) => (WrappedComponent) => {
  const mapurl = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey;

  class GoogleApiComponent extends React.Component {
    state = {
      loaded: false,
      google: null
    }

    componentDidMount = () => {
      if (window.google) {
        this.setState({
          loaded: true,
          google: window.google
        });
      } else {
        let apiScript = document.querySelector('script[src="' + mapurl + '"]');
        if (!apiScript) {
          const newScript = document.createElement('script');
          newScript.src = mapurl;
          newScript.type = 'text/javascript';
          document.body.appendChild(newScript);
          apiScript = newScript;
        }
        apiScript.onload = () => {
          this.setState({
            loaded: true,
            google: window.google,
          });
        };
      }
    }

    render() {
      return (
        <WrappedComponent {...this.state} />
      );
    }
  }

  return GoogleApiComponent;
};

export default withGoogleApi;
