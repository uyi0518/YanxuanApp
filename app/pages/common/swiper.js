import React from 'react';
import {View, Platform, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import Swiper from 'react-native-swiper';

class SwiperView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {pics} = this.props
    const SwiperItems = pics.map((pic) => <View key={pic.uri}>
      <TouchableWithoutFeedback>
        <Image source={pic} style={{
          height: 180,
          
          
        }}/>
      </TouchableWithoutFeedback>
    </View>)

    return <View style={[styles.container]}>
      <Swiper
       
        showsButtons={false}
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0}} />}
        paginationStyle={{bottom:10,left:200}}
        autoplay
        autoplayTimeout={5}>
        {SwiperItems}
      </Swiper>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    height:180
   
    
  },
 
});

export default SwiperView;