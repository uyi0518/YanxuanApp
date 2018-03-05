import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }
      static navigationOptions = {
        tabBarLabel: '购物车1',
        tabBarIcon: ({tintColor, focused}) => (<Ionicons
            name={focused
            ? 'ios-cart'
            : 'ios-cart-outline'}
            size={24}
            style={{
            color: tintColor
        }}/>)
    }
   
    render(){
        return <View style={[styles.container]}>
            <Text>index</Text>
        </View>
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  }
});

export default Cart;