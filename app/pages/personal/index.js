import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,
    Alert,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {inject, observer} from 'mobx-react'
import LottieView from 'lottie-react-native';
import MyText from '../../utils/MyText'

@inject('rootstore')

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            progress: new Animated.Value(0),
        }
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarLabel: '个人',
        header: null,
        tabBarIcon: ({tintColor, focused}) => (<Ionicons
            name={focused
            ? 'ios-person'
            : 'ios-person-outline'}
            size={24}
            style={{
            color: tintColor
        }}/>),
        tabBarOnPress: ({previousScene, scene, jumpToIndex}) => {
            console.log(navigation)
            
            navigation
                .state
                .params
                ._onpress(jumpToIndex, scene)

        }
    })
    componentDidUpdate() {}
    componentDidMount() {
        this
            .props
            .navigation
            .setParams({_onpress: this._onpress})

            Animated.timing(this.state.progress, {
                toValue: 0.5,
                duration: 5000,
              }).start();
            
    }

    _onpress = (jumpToIndex, scene) => {
        if (!this.props.rootstore.islogin) {
            this
                .props
                .navigation
                .navigate("login")
        } else {
            jumpToIndex(scene.index)
        }

    }

    render() {
        return <View style={[styles.container]}>
            <LottieView
                style={{height:100,backgroundColor:"#000"}}
                ref={animation => {
                this.animation = animation;
            }}
            progress={this.state.progress}
                source={require('../../animation/someloading.json')}/>
               <MyText>1111</MyText>

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:"rgb(46, 204, 113)"
    }
});

export default Personal;