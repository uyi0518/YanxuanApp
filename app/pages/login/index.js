import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {inject, observer} from 'mobx-react'

@inject('rootstore')
@observer
class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state={show:true}
    }
    _login = () => {
        
        this.props.rootstore.login()
        
        this.props.navigation.navigate('recommend')
    }
    render() {
        return <Modal animationType='slide' onRequestClose={()=>{}} visible={!this.props.rootstore.islogin}>
            <View style={[styles.container]}>
            <View style={[styles.user]}>
                <TextInput underlineColorAndroid="transparent" style={{padding:0}} autoFocus placeholder="邮箱账号/手机号" placeholderTextColor='#999999'></TextInput>
            </View>
            <View style={[styles.user]}>
                <TextInput underlineColorAndroid="transparent" style={{padding:0}}  placeholder="密码" placeholderTextColor='#999999' secureTextEntry></TextInput>
            </View>

            <TouchableOpacity onPress={this._login} style={[styles.button]}>
                <Text style={{color:'#fff',fontSize:18}}>登录</Text>
            </TouchableOpacity>
                
            </View>

        </Modal>
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding:20
    },
    user:{
        borderBottomWidth:1,
        borderColor:'#bfbfbf',
        height:50,
        width:'100%',
        justifyContent: 'center',
        
    },
   button:{
    height:50,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#b4282d',
    marginTop:20
    }
})

export default LoginView;