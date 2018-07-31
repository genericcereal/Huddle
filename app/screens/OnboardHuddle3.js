// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { StackActions, NavigationActions } from 'react-navigation';



export class OnboardHuddle3 extends Component {
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

      <Button
      onPress={() => {
                       const resetAction = StackActions.reset({
                           index: 0,
                           key: null,
                           actions: [NavigationActions.navigate({ routeName: 'Main'})]
                       });
                       this.props.navigation.dispatch(resetAction);
                    }}
        title="login"

      />
      </View>
      </View>

    )
  }
};

export default OnboardHuddle3;
