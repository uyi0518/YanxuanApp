import React from 'react';
import {View, StyleSheet,Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {inject, observer} from 'mobx-react'
import IndexHeader from './header'
import Scrollable from  './scrollable'
@inject('rootstore')

class Index extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor, focused}) => (<Ionicons
            name={focused
            ? 'ios-home'
            : 'ios-home-outline'}
            size={24}
            style={{
            color: tintColor
        }}/>),
        header: null
    }
    componentDidMount(){
        Alert.alert("gogogoindex")
    }
  
    render() {
        return <View style={[styles.container]}>
            <IndexHeader {...this.props} />
            <Scrollable></Scrollable>   

           
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
       
    }
});

export default Index;