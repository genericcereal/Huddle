// Settings.js

import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Styles from '../../styles/common';

export class PrimaryButton extends Component {



  render() {
    return (
      <TouchableHighlight style={[ Styles.Btn, Styles.BtnPrm ] }

        onPress={ this.props.onPress }
      >

           <Text style={ Styles.buttonText }>{this.props.title} </Text>

   </TouchableHighlight>
    )
  }
};



export default PrimaryButton;
