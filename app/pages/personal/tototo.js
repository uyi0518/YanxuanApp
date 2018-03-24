import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,Alert,TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        Alert.alert("gogogo")
    }

    render(){
        return <View style={[styles.container]}>
        <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
            <Text>tototo</Text>
        </TouchableOpacity>
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