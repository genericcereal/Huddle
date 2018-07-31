// Settings.js

import React, { Component } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Constants, MapView } from 'expo';
import TextField from '../components/textfields/Textfield';
import HuddleCarousel from '../components/carousel/carousel';
import Styles from '../styles/common';
import PrimaryButton from '../components/buttons/PrimaryButton';
import AvatarSm from '../components/avatars/AvatarSm';
import Map from '../components/map/Map';





const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;



export class ViewEvent extends Component {



  render() {
    return (


        <View style={ Styles.fspage }>
        <ScrollView>
        <View style={{ width: '100%', height: '80%', overflow: 'visible', flexDirection: 'column' }}>


                      <View style={ Styles.p15}>
                      <Text style={ Styles.h1 }>An Event Name</Text>
                      <Text style={ Styles.h4 }>8:00PM.  Barclays Center.</Text>
                      </View>

                      <View style={[ Styles.mt10, { flex: 1, width: '100%', alignItems: 'center', height: 280, overflow: 'visible', zIndex: 30, elevation: 30,  }]}>
                      <HuddleCarousel />
                      </View>

                      <View style={ Styles.p15 }>
                      <Text style={ Styles.label }>About this Event</Text>
                      <View style={ Styles.mt10 }>
               <Text style={[ Styles.caption ]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis justo, auctor a orci molestie, hendrerit pretium metus. Mauris rutrum lectus in ex mattis, sed dictum dui fringilla. Vivamus vel luctus elit, et lacinia lectus. Cras a est tortor. Pellentesque malesuada et elit non ornare. Mauris congue pretium mauris, vitae faucibus sapien. Nullam pulvinar vel tellus in posuere.

              Mauris aliquam sed dolor quis ultricies. Nulla eget enim ultricies, iaculis enim vel, dapibus sem. Fusce vitae varius urna, quis convallis ante. Suspendisse sagittis tristique velit quis pretium. Phasellus commodo posuere ipsum, in rutrum quam imperdiet vel. Nam a orci nec purus bibendum commodo. Morbi eleifend dapibus felis condimentum pharetra.</Text>
              </View>
              </View>

                      <View style={ Styles.mt15 }>
                      </View>
                      <View style={ Styles.pl15 }>
                      <Text style={ Styles.label }>About this Event</Text>
                      </View>
                      <View style={ Styles.mt10 }>
                      <Map />
                      </View>
    <View style={ Styles.p15 }>

                     <View style={ Styles.mt30 }>
                     <Text style={ Styles.label }>About this Event</Text>
                     <View style={[ Styles.mt10, Styles.Row ]}>
                     <AvatarSm />
                      <AvatarSm />
                       <AvatarSm />
                        <AvatarSm />
                        <AvatarSm />
                            <AvatarSm />
                             <AvatarSm />
                              <AvatarSm />
                              <AvatarSm />
                                  <AvatarSm />
                                   <AvatarSm />
                                    <AvatarSm />
                                    <AvatarSm />
                                        <AvatarSm />
                                         <AvatarSm />
                                          <AvatarSm />
        </View>

        <View style={ Styles.mt30, Styles.w100 }>
        <Text style={Styles.label} >Location</Text>

        </View>

      </View>
      </View>
      </View>
        </ScrollView>
        <View style={ Styles.absolutebottom }>
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('CompleteCheckin')}
          title={'Button'}

        />
        </View>

      </View>

    )
  }
};

export default ViewEvent;
