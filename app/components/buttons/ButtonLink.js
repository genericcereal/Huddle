// Settings.js

import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';
import Styles from '../../styles/common';

export class ButtonLink extends Component {



  render() {
    return (
      <TouchableHighlight onPress={ this.props.onPress }>

           <Text style={ Styles.h4 }>{this.props.title} </Text>

   </TouchableHighlight>
    )
  }
};



export default ButtonLink;
