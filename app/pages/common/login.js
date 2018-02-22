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

class LoginView extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return <Modal animationType='slide' onRequestClose={()=>{}}>
            <View style={[styles.container]}>
            <View style={[styles.user]}>
                <TextInput underlineColorAndroid="transparent" style={{padding:0}} autoFocus placeholder="邮箱账号/手机号" placeholderTextColor='#999999'></TextInput>
            </View>
            <View style={[styles.user]}>
                <TextInput underlineColorAndroid="transparent" style={{padding:0}}  placeholder="密码" placeholderTextColor='#999999' secureTextEntry></TextInput>
            </View>

            <TouchableOpacity onPress={this.props._onpress} style={[styles.button]}>
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