// Settings.js

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';
import PrimaryButton from '../components/buttons/PrimaryButton';
import LinkedInButton from '../components/buttons/LinkedInButton';
import Styles from '../styles/common';




export class Login extends Component {




  render() {
    return (
      <View style={[ Styles.page, loginStyles.login ]}>

      <View style={ loginStyles.bottom }>
      <View>
      <PrimaryButton
        onPress={() => this.props.navigation.navigate('LoginHuddleScreen')}
        title={'Button'}
      />
      <View   style={ Styles.mt15 }>
      <LinkedInButton
        onPress={() => this.props.navigation.navigate('LoginHuddleScreen')}
        title={'Button'}
      />
      </View>
      </View>
      <View style={[Styles.mt60, Styles.Row] }>
      <Text>New to Huddle?</Text><Text onPress={() => this.props.navigation.navigate('CreateHuddleAcctScreen')}>Sign Up</Text>
      </View>
      </View>

      </View>
    )
  }
};

var loginStyles = StyleSheet.create({

  bottom: {
    height: '50%',
      width: '100%',
    position: 'absolute',
    bottom: '0%'
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    position: 'absolute',
    top: 0,
    color: 'red',
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
