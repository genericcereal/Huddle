// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { StackActions, NavigationActions } from 'react-navigation';

export class Messages extends Component {
  render() {
    return (
        <View style={ Styles.fspage }>
        <View style={[Styles.p15, {width: '100%', height: '80%', top: 0, flexDirection: 'column',

      }]}>
        <View style={ Styles.mt15 }>
        <Text style={ Styles.h1 }>Tell us about yourself</Text>
        </View>
        <View style={ Styles.mt15  }>
        <TextField label={'First Name'} />
        </View>

        <View style={ Styles.mt15  }>
        <TextField label={'Email'} />
        </View>

        <View style={ Styles.mt15  }>
        <TextField label={'Password'} />
        </View>


      </View>
      <View style={ Styles.absolutebottom }>
      <PrimaryButton
        onPress={() => this.props.navigation.navigate('OnboardHuddle2Screen')}
        title={'Button'}

      />
      </View>
      </View>

    )
  }
};

export default Messages;
