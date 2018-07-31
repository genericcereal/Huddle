// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';

export class OnboardHuddle1 extends Component {
  render() {
    return (
        <View style={ Styles.fspage }>
        <View style={[Styles.p15, {width: '100%', height: '80%',  flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center',
      }]}>
                    <View style={{width: '100%', height: 100, alignItems: 'center',}}>
                    <Image
                     source={require('../assets/images/logos/Logo-Blue.png')}
                     style={{width: '60%', height: 100,}}
                     resizeMode="contain"
                     />
                     </View>
                     <View style={[Styles.p15, Styles.mt30, {alignItems: 'center',}]}>
                      <Text style={[Styles.tac, Styles.textColorGrey]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus, magna a venenatis faucibus, risus orci fermentum mauris, et tristique risus </Text>
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

export default OnboardHuddle1;
