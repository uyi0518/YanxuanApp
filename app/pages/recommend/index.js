import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CarouselView from '../common/carousel'
import {goods} from './mock'
class Recommend extends React.Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        headerTitle: '识物',
        headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'normal',
            fontSize: 20
        },
       
        headerLeft:null,
        tabBarLabel: '识物',
        tabBarIcon: ({tintColor, focused}) => (<Ionicons
            name={focused
            ? 'ios-browsers'
            : 'ios-browsers-outline'}
            size={24}
            style={{
            color: tintColor
        }}/>)
    }
    
    render() {
        return <ScrollView style={[styles.container]}>
            <CarouselView goods={goods}/>
            
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Recommend;