// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ProfilePhoto from '../components/camera/profilephoto';

export class OnboardHuddle2 extends Component {
  render() {
    return (
        <View style={ Styles.fspage }>
        <View style={[Styles.p15, {width: '100%', height: '80%',  flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center',
      }]}>
                    <View style={{width: '100%', height: 100, alignItems: 'center',}}>
                    <ProfilePhoto />
                     </View>
                     <View style={[Styles.p15, Styles.mt60, {alignItems: 'center',}]}>
                      <Text style={[Styles.tac,  Styles.h3]}>Choose your Profile Picture </Text>
                     </View>
        </View>



        <View style={ Styles.absolutebottom }>
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('OnboardHuddle3Screen')}
          title={'Button'}

        />
        </View>
      </View>

    )
  }
};

export default OnboardHuddle2;
