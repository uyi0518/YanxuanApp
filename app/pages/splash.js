import React from 'react';
import { Dimensions, Image } from 'react-native';

import SplashScreen from 'react-native-splash-screen';



const splashImg = require('./lanch.png');

class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
     
    };
   
  }

  componentDidMount() {
 
    SplashScreen.hide();
  
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <Image
        style={{
          width: 300,
          height: 200,
          
        }}
        source={splashImg}
      />
    );
  }
}

export default Splash;