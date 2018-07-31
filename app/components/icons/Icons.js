import React, { Component } from 'react';
import { View, Text,}  from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../config/config';
const HuddleIcon = createIconSetFromFontello(fontelloConfig, 'icons');




export default class Icons extends React.Component {
  render() {

    return (
        <HuddleIcon name={this.props.name} size={this.props.size} color={this.props.color} />
    );
  }
}
