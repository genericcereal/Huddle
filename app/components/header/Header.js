import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styles from '../../styles/common';

export class Settings extends Component {
  render() {
    return (
        <View style={[Styles.pt45, Styles.pb30,  Styles.pl15, Styles.borderb ]}>
          <Text style={[ Styles.h2, ]}>{ this.props.title }</Text>
      </View>

    )
  }
};

export default Settings;
