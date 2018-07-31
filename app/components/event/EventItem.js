import React, {Component} from 'react';
import {View, Text, TextInput, Image, ImageBackground, TouchableHighlight} from 'react-native';
import Styles from '../../styles/common';
import Colors from '../../styles/colors';
import Icons from '../../components/icons/Icons';
import MedPrimaryButton from '../../components/buttons/MedPrimaryButton';
import AvatarSm from '../../components/avatars/AvatarSm';

export class EventItem extends Component {
  render() {
    return (<View style={[Styles.shadow2, Styles.Column, Styles.backgroundWhite, Styles.mt15]}>
      <TouchableHighlight style={{
          width: '100%',
          height: 300,
          overflow: 'hidden'
        }}

onPress={this.props.onPress}
        >


        <ImageBackground source={{
            uri: this.props.imageUri
          }} style={{
            height: 300
          }}>
          <Text>ewkrhweljr</Text>
          </ImageBackground>
      </TouchableHighlight>


    </View>)
  }
};

export default EventItem;
