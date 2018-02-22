import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window')
const itemwidth=width * 0.9
class CarouselView extends React.Component {
  constructor(props) {
    super(props);
    
  }
  _renderItem({item, index}) {
    return (
      <TouchableWithoutFeedback style={[styles.item]}>
        <Image source={item} style={{width:itemwidth,height:180, borderRadius:5,}} />
      </TouchableWithoutFeedback>
    );
  }
  render() {

    return <View style={[styles.container]}>
      <Carousel
        activeSlideOffset={30}
        inactiveSlideScale={0.95}
        data={this.props.goods}
        renderItem={this._renderItem}
        sliderWidth={width}
        itemWidth={itemwidth}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    height: 210,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#fff',
   

  },
  item: {
    
  }
});

export default CarouselView;