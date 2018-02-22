import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchView from './search'
import CategoryList from './categorylist'



class Category extends React.Component {
    constructor(props) {
        super(props);
        
    }
      static navigationOptions = {
        tabBarLabel: '分类',
        header:null,
        tabBarIcon: ({tintColor, focused}) => (<Ionicons
            name={focused
            ? 'ios-keypad'
            : 'ios-keypad-outline'}
            size={24}
            style={{
            color: tintColor
        }}/>)
    }
    componentDidMount(){
       
    }
    render(){
        return <View style={[styles.container]}>
           <SearchView />
           <CategoryList/>
        </View>
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
    
   
  }
});

export default Category;