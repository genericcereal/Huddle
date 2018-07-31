import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Button, Image, Text, ImageBackground } from 'react-native';
import { Constants, Permissions, ImagePicker } from 'expo';
import Styles from '../../styles/common';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export class ProfilePhoto extends Component {



  state = {
    image: null,
  };

  render() {



    let { image } = this.state;

    return (



      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        <View style={Styles.photoHolder} >
        <View style={{ position: 'absolute', top: -8, left: -8}}>
              <AnimatedCircularProgress
          size={166}
          width={16}
          fill={100}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
          </View>
        <TouchableHighlight onPress={this._pickImage} style={Styles.photoHolder }>
          <ImageBackground source={require('../../assets/icons/upload-profile-picture.png')} style={{width: '100%', height: '100%'}}>      </ImageBackground>
         </TouchableHighlight>

        {image &&

          <Image source={{ uri: image }} style={[Styles.photoHolder, { position: 'absolute', top: 0 } ]} />

      }


          <View style={[Styles.photoEdit, Styles.displayNone, Styles.shadow1]}>

          </View>
      </View>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {

      this.setState({ image: result.uri });
    }
  };
}

export default ProfilePhoto;
