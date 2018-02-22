import React from 'react';
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,
    Alert,
    TouchableWithoutFeedback
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginView from '../common/login'
import {inject, observer} from 'mobx-react'

@inject('rootstore')

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    static navigationOptions = ({navigation,screenProps}) =>({
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
        tabBarOnPress: ({previousScene,scene,jumpToIndex}) => {
           
            navigation.state.params._onpress()
            jumpToIndex(scene.index)
            
       },
    })
    componentDidMount() {
        this
            .props
            .navigation
            .setParams({_onpress: this._onpress})
    }
    
    _onpress = () => {
        
        this.setState({show: this.props.rootstore.islogin})
    }
    _active = () => {
        
        this.props.rootstore.login()
        this.setState({show: this.props.rootstore.islogin})
        this.props.navigation.navigate('recommend')
    }
    render() {
        return <View style={[styles.container]}>
            {this.state.show && <LoginView _onpress={this._active} {...this.props}></LoginView>}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Personal;