import React, { Component } from 'react';

import flatsData from '../../data/flats';
import FlatList from './flatlist';
import SimpleMap from './simple-map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flatsData,
      selectedFlatId: 1
    };
  }

  selectFlat = (id) => {
    this.setState({
      selectedFlatId: id
    });
  }

  findFlat = (id) => {
    const { flats } = this.state;
    return flats[parseInt(id, 10) - 1];
  }

  render() {
    const { flats, selectedFlatId } = this.state;
    const selectedFlat = this.findFlat(selectedFlatId);
    return (
      <div>
        <FlatList flats={flats} selectedFlatId={selectedFlatId} selectFlat={this.selectFlat} />
        <div className="map-container">
          <SimpleMap center={selectedFlat.coordinates} />
        </div>
      </div>
    );
  }
}

export default App;
