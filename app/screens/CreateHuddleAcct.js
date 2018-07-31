// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';

export class CreateHuddleAcct extends Component {
  render() {
    return (
        <View style={ Styles.page }>
        <View style={ Styles.mt15 }>
        <Text style={ Styles.h1 }>Create Huddle Account</Text>
        </View>
        <View style={[ Styles.mt45, Styles.Row ]}>

        <View style={[Styles.w48, Styles.inlineFlex]}>
        <TextField label={'First Name'} />
        </View>

        <View style={[Styles.w48, Styles.ml4, Styles.inlineFlex]}>
        <TextField label={'First Name'} />
        </View>

        </View>

        <View style={ Styles.mt15  }>
        <TextField label={'Email'} />
        </View>

        <View style={ Styles.mt15  }>
        <TextField label={'Password'} />
        </View>
        <View style={Styles.mt45 }>
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('OnboardHuddle1Screen')}
          title={'Button'}

        />
        </View>
        <View style={[Styles.pt60, Styles.mt30, Styles.bordert]}>
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('LoginHuddleScreen')}
          title={'Button'}

        />
        </View>

      </View>
    )
  }
};

export default CreateHuddleAcct;
