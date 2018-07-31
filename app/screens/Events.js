// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import TextField from '../components/textfields/Textfield';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';
import Header from '../components/header/Header';
import EventItem from '../components/event/EventItem';
import Entries1 from '../data/entries';
import { StackActions, NavigationActions } from 'react-navigation';

export class Events extends Component {
  render() {
    return (
        <View style={ Styles.fspage }>
                <ScrollView>
        <Header title={'Events'} />

        <View style={[Styles.p15, {width: '100%', height: '100%', top: 0, flexDirection: 'column',

      }]}>

      <EventItem title={'Lorem Ipsum Lorem Ipsum'} style={ Styles.mt15 } imageUri={ Entries1[0]} onPress={() => this.props.navigation.navigate('Checkin')}/>
        <EventItem title={'Lorem Ipsum Lorem Ipsum'} style={ Styles.mt15 } imageUri={'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg'}/>
          <EventItem title={'Lorem Ipsum Lorem Ipsum'} style={ Styles.mt15 } imageUri={'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2018/01/15155312/iStock-667709450.jpg'}/>








      </View>
            </ScrollView>

      </View>

    )
  }
};

export default Events;
