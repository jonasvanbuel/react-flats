import React from 'react';

import Card from './card';


const FlatList = ({ flats, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return <Card flat={flat} selectFlat={selectFlat} key={flat.id} />;
      })}
    </div>
  );
};

export default FlatList;
