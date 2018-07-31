import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import { Font, AppLoading, Asset } from 'expo';
import Entries1 from './app/data/entries';

import Route from './app/config/route';


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {

    return fonts.map(font => Font.loadAsync(font));

}

export default class App extends Component {



    state = {
      isLoadingComplete: false,
    };


// AppLoading will show the splashscreen as long as it takes to load your font
render() {
  if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  } else {
    return (

        <Route />
    );
  }
}

  _loadResourcesAsync = async () => {
  return Promise.all([
    Asset.loadAsync([

    ]),
    Font.loadAsync({
      'icons': require('./app/assets/fonts/icons.ttf'),
      'OpenSans-Bold': require('./app/assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Regular': require('./app/assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./app/assets/fonts/OpenSans-SemiBold.ttf'),
    }),
  ]);
};

_handleLoadingError = error => {
  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  console.warn(error);
};

_handleFinishLoading = () => {
  this.setState({ isLoadingComplete: true });
};
}
