import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { MapView } from 'expo';

export class Map extends Component {
  render() {
    return (
      <MapView
   style={{ flex: 1, height: 250 }}
   initialRegion={{
     latitude: 37.78825,
     longitude: -122.4324,
     latitudeDelta: 0.0922,
     longitudeDelta: 0.0421,
   }}
 />
    )
  }
};

export default Map;
