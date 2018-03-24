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
import NavHeader from '../common/navHeader';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }
      static navigationOptions = {
        tabBarLabel: '购物车',
        header:null,
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
               <NavHeader headerTitle="人生何处不相逢" ></NavHeader>
            <Text>index</Text>
        </View>
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
  }
});

export default Cart;