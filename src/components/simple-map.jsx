import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 16
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ENV['GOOGLE_API_KEY'] }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
