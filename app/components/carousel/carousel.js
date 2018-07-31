import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');
import Entries1 from '../../data/entries';
const SLIDER_1_FIRST_ITEM = 1;

class HuddleCarousel extends Component {


  constructor (props) {
      super(props);
      this.state = {
          activeSlide: SLIDER_1_FIRST_ITEM
      };
  }




    renderItem  ({item, index})   {


        return (

          <View>
            <Image style={styles.logoStyle} data={item} source={{ uri: item }} />
            </View>

        );
    }





    render () {
            const { activeSlide } = this.state;

        return (

                <View style={{ height: 370, overflow: 'visible' }}>
                    <Carousel
                      ref={c => this._slider1Ref = c}
                      inactiveSlideOpacity={0.6}
                      inactiveSlideScale={1}
                      firstItem={SLIDER_1_FIRST_ITEM}
                      sliderWidth={width}
                      itemWidth={width}
                      data={Entries1}

                      renderItem={this.renderItem}

                      onSnapToItem={(index) => this.setState({ activeSlide: index }) }

                 />
                 <Pagination
                   dotsLength={Entries1.length}
                   activeDotIndex={activeSlide}
                    containerStyle={styles.paginationContainer}
                    dotColor={'rgba(255, 255, 255, 0.92)'}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={colors.black}
                   inactiveDotOpacity={1}
                   inactiveDotScale={1}
                   carouselRef={this._slider1Ref}
                       tappableDots={!!this._slider1Ref}
                 />


                </View>


        );
    }


}

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const styles = {
    logoStyle: {
        width: width / 1.05,
        height: width / 1.5,
        left: -20,

    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
      position: 'absolute',
        bottom: 60,
        alignItems: 'center',
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        marginHorizontal: -2,

    }
  };




export default HuddleCarousel;
