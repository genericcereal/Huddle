import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import {Header, createStackNavigator} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Styles from '../styles/common';
import Login from '../../app/screens/Login';
import LoginHuddle from '../../app/screens/LoginHuddle';
import CreateHuddleAcct from '../../app/screens/CreateHuddleAcct';
import OnboardHuddle1 from '../../app/screens/OnboardHuddle1';
import OnboardHuddle2 from '../../app/screens/OnboardHuddle2';
import OnboardHuddle3 from '../../app/screens/OnboardHuddle3';
import Events from '../../app/screens/Events';
import Messages from '../../app/screens/Messages';
import Profile from '../../app/screens/Profile';
import ViewEvent from '../../app/screens/ViewEvent';
import CompleteCheckin from '../../app/screens/CompleteCheckin';
import Connections from '../../app/screens/Connections';
import Settings from '../../app/screens/Settings';
import ActiveEvent from '../../app/screens/ActiveEvent';
import Icons from '../../app/components/icons/Icons';
import Colors from '../../app/styles/colors';

class MyCustomHeaderBackImage extends Component {
  render() {
    return (<Ionicons name="ios-arrow-round-back-outline" size={50} style={{
        paddingTop: 0,
        paddingLeft: 15
      }} color="black"/>);
  }
}

const Route = createStackNavigator({

    Onboarding: {
      screen: createStackNavigator({
        //Logins
        LoginScreen: {
          screen: Login
        },
        LoginHuddleScreen: {
          screen: LoginHuddle
        },
        CreateHuddleAcctScreen: {
          screen: CreateHuddleAcct
        },

        //Onboard with Huddle
        OnboardHuddle1Screen: {
          screen: OnboardHuddle1
        },
        OnboardHuddle2Screen: {
          screen: OnboardHuddle2
        },
        OnboardHuddle3Screen: {
          screen: OnboardHuddle3
        }
      },{
      initialRouteName: 'LoginScreen',
      /* The header config from HomeScreen is now here */
      navigationOptions: {

        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 0,
          borderBottomWidth: 0,
          height: 50
        },

        headerBackImage: MyCustomHeaderBackImage,

        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
},

)

},


Checkin: {
  screen: createStackNavigator({
    CheckInModal: {
      screen: createStackNavigator({
        ViewEvent: {
          screen: ViewEvent,
          navigationOptions: ({ navigation }) => ({
  headerLeft: (
    <TouchableOpacity
      onPress={() => navigation.goBack(null)}
    >
    <Ionicons name="ios-arrow-round-back-outline" size={50} style={{
        paddingTop: 0,
        paddingLeft: 15
      }} color="black"/>
    </TouchableOpacity>
  ),
}),

        },
        CompleteCheckin: {
          screen: CompleteCheckin
        },

      },{
          initialRouteName: 'ViewEvent',
          navigationOptions: {
            headerBackImage: MyCustomHeaderBackImage,
            headerStyle: {
                 backgroundColor: '#FFFFFF',
                 elevation: 0,
                 borderBottomWidth: 0,
                 height: 50
               },
         },

      }),
    },


  },{
      initialRouteName: 'CheckInModal',
    mode: 'modal',
    headerMode: 'none',

  }),
},

  //Main

  Main: {
    screen: createBottomTabNavigator({
      EventsIndex: {
        screen: createStackNavigator({
          Events: {
            screen: Events,
          },
          ActiveEvent: {
            screen: ActiveEvent
          },

        },{
            initialRouteName: 'Events',
            navigationOptions: {
               header: null,
           }

        }),
      },

      Messages: {
        screen: Messages
      },
      Connections: {
        screen: Connections
      },
      Profile: {
        screen: Profile
      },
      Settings: {
        screen: Settings
      }
    }, {

      initialRouteName: 'EventsIndex',
      navigationOptions: ({navigation}) => ({



        tabBarIcon: ({focused, tintColor}) => {



          //Style tabBar icons
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'EventsIndex') {
            iconName = `ticket`;
          } else if (routeName === 'Connections') {
            iconName = `user-group`;
          } else if (routeName === 'Messages') {
            iconName = `conversation`;
          } else if (routeName === 'Profile') {
            iconName = `user-id`;
          } else if (routeName === 'Settings') {
            iconName = `gear`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icons name={iconName} size={25} color={tintColor}/>;
        }
      }),


      //this will hide the header
      tabBarOptions: {

        activeTintColor: Colors.blue0,
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: '#FFF'
        }
      }
    },)
  },
}, {
  navigationOptions: {
      header: null,
  },
    initialRouteName: 'Onboarding',

});

export default Route;
