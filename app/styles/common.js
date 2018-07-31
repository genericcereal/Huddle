import {StyleSheet} from 'react-native';

//set hacky REM solution which should probably be updated
let rem = 14;

//Set font fontFamily
let regular = "OpenSans-Regular";
let bold = "OpenSans-Bold";

//Set Spacing Units
let smSpace = 4;
let mdSpace = 2 * smSpace;
let lgSpace = 2 * mdSpace;
let xlSpace = 2 * lgSpace;

const Colors = {
  white: '#FFFFFF',
  grey0: '#DDE6E9',
  grey1: '#858FA0',
  grey2: '#959C9E',
  blue0: '#33B5FF',
  black: '#000',
  linkedInBlue: '#007CB2',
  // your colors
}

const Styles = StyleSheet.create({

  //Get icon font
  icon: {
    fontFamily: 'icons'
  },

fontBold: {
  fontFamily: bold,
},
//text Alignment

textCenter: {
  textAlign: 'center',
},

textLeft: {
  textAlign: 'left',
},

textRight: {
  textAlign: 'right',
},
  // Text ramp

  typeRamp0: {
    fontSize: 0.9 * rem
  },
  typeRamp1: {
    fontSize: rem
  },

  typeRamp2: {
    fontSize: 1.1 * rem
  },

  typeRamp3: {
    fontSize: 1.2 * rem
  },

  typeRamp4: {
    fontSize: 1.3 * rem
  },


  // Line height

lineHeight1: {
      lineHeight: rem,
},

lineHeight2: {
      lineHeight: 1.1 * rem
},

lineHeight3: {
      lineHeight: 1.2 * rem
},

lineHeight4: {
      lineHeight: 1.3 * rem
},


  // Text colors
  textColor1: {
    color: Colors.white
  },

  textColor2: {
    color: Colors.grey0
  },

  textColor3: {
    color: Colors.grey1
  },

  textColor4: {
    color: Colors.grey2
  },

  textColor5: {
    color: Colors.blue0
  },

  textColor6: {
    color: Colors.black
  },
  // backgrounds

  backgroundWhite: {
    backgroundColor: Colors.white
  },

  backgroundBlue: {
    backgroundColor: Colors.blue0
  },

  //Header

  //flex

  Column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },

  Row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '100%'
  },

  //widths


  w25: {
    width: '25%'
  },
  w30: {
    width: '30%'
  },

  w50: {
    width: '50%'
  },

  w70: {
    width: '70%'
  },

  w75: {
    width: '75%'
  },

  w100: {
    width: '100%'
  },



  //fonts

  textColorGrey: {
    color: Colors.grey1
  },


  textSize1: {
      fontSize: rem,
    },



  smallCaption: {
    fontSize: rem,
    fontFamily: regular
  },
  caption: {
    fontSize: rem,
    fontFamily: regular
  },

  label: {
    fontSize: rem,
    fontFamily: bold,
  },

  fontReg: {
    fontSize: rem
  },

  h1: {
    fontSize: rem,
    fontFamily: bold,
  },

  h2: {
    fontSize: rem,
    fontFamily: 'OpenSans-Bold'
  },

  h3: {
    fontSize: rem,
    fontFamily: 'OpenSans-Bold'
  },

  h4: {
    fontSize: rem,
    fontFamily: 'OpenSans-Bold'
  },


  //textfield

  textFieldStd: {
    borderWidth: 1,
    borderColor: Colors.grey0,
    padding: 20
  },
  //Primary Button

  Btn: {
    width: '100%',
    padding: 15,

  },

  smBtn: {
    width: '100%',
    padding: 4,
    borderWidth: 2,
    borderColor: Colors.grey0,

  },
  BtnPrm: {
    backgroundColor: Colors.blue0
  },

  LiBtn: {
    backgroundColor: Colors.linkedInBlue
  },

  buttonText: {

    color: Colors.white,
    fontSize: rem,

  },

  //Justify (Flexbox Vertical Alignment)

  justifyCenter: {
    justifyContent: 'center'
  },



  //Align (Horizontal Alignment )

  alignCenter: {
    alignItems: 'center'
  },

  alignRight: {
    alignItems: 'flex-end'
  },

  alignLeft: {
    alignItems: 'flex-start'
  },

  //Shadows
  shadow0: {
    shadowColor: Colors.grey0,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 0
  },

  shadow1: {
    shadowColor: Colors.grey2,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.4,
    shadowRadius: 30
  },

  shadow2: {
    shadowColor: Colors.grey1,
    shadowOffset: {
      width: 20,
      height: 30
    },
    shadowOpacity: 0.4,
    shadowRadius: 30
  },
  //Margins

  ml3: {
    marginLeft: 3
  },

  mt5: {
    marginTop: 5
  },

  ml5: {
    marginLeft: 5
  },

  mt10: {
    marginTop: 10
  },

  ml15: {
    marginLeft: 15
  },
  mt15: {
    marginTop: 15
  },

  mt30: {
    marginTop: 30
  },

  mt45: {
    marginTop: 45
  },

  ml4: {
    marginLeft: '4%'
  },

  mt60: {
    marginTop: 60
  },

  pt30: {
    paddingTop: 30
  },

  pb30: {
    paddingBottom: 30
  },

  pt45: {
    paddingTop: 45
  },

  pt60: {
    paddingTop: 60
  },

  pl15: {
    paddingLeft: 15
  },

  pr15: {
    paddingRight: 15
  },

  pt15: {
    paddingTop: 15
  },

  pb15: {
    paddingBottom: 15
  },

  pt5: {
    paddingTop: 5
  },
  p5: {
    padding: 5
  },
  p10: {
    padding: 10
  },
  p15: {
    padding: 15
  },

  absolutebottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //Borders

  bordert: {
    borderTopWidth: 1,
    borderColor: Colors.grey0
  },

  borderb: {
    borderBottomWidth: 1,
    borderColor: Colors.grey0
  },
  //Page

  fspage: {
    backgroundColor: Colors.white,
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  page: {
    backgroundColor: Colors.white,
    height: '100%',
    width: '100%',
    padding: 15,
    flex: 1,
    flexDirection: 'column'
  },

  //Profile

  photoSmall: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 4,
    backgroundColor: Colors.blue0
  },
  photoHolder: {
    width: 150,
    height: 150,
    backgroundColor: Colors.blue0,
    borderRadius: 75
  },

  photoEdit: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.white,
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})


export default Styles;
