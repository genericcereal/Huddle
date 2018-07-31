// Settings.js

import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Styles from '../../styles/common';

export class MedPrimaryButton extends Component {



  render() {
    return (
      <TouchableHighlight style={[ Styles.smBtn,  Styles.backgroundWhite, ]} onPress={ this.props.onPress }>

           <Text style={[ Styles.typeRamp0, Styles.fontBold, Styles.textCenter ]}>{this.props.title} </Text>

   </TouchableHighlight>
    )
  }
};



export default MedPrimaryButton;
