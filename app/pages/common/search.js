import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text,Button,Keyboard,Animated, Modal,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput from 'teaset/components/SearchInput/SearchInput';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={isfocused:true,searchvalue:''}
    }
    isfocus=()=>{
       this.setState({isfocused:false})
    }
    iscancel=()=>{
      this.setState({isfocused:true,searchvalue:''})
       Keyboard.dismiss()

    }
    _go=()=>{
        this.props.navigation.navigate('gogogo')
    }
    render() {
        const {isfocused,searchvalue}=this.state
        const SearchBefore = (
            
                <SearchInput
                    style={{
                    flex: 1,
                    backgroundColor: '#ededed',
                    borderColor: '#ededed'
                }}
                    inputStyle={{
                    color: '#000',
                    fontSize: 14
                }}
                    iconSize={15}
                    placeholder='搜索商品，共9837款好物'
                    placeholderTextColor='#000'
                    onFocus={this.isfocus}
                    onChangeText={(text) => this.setState({searchvalue:text})}
                    value={searchvalue}
                   />

           
        )
        const Qrcode=(
            <TouchableOpacity style={[styles.qrcode]} onPress={this._go}>
                <Ionicons name="ios-qr-scanner" backgroundColor="#fff" color="#000" size={20} ></Ionicons>
                <Text style={{fontSize:12}}>扫一扫</Text>
            </TouchableOpacity>
        )
        const Message=(
            <TouchableOpacity style={[styles.message]}>
                <Ionicons name="ios-notifications-outline" backgroundColor="#fff" color="#000" size={20} ></Ionicons>
                <Text style={{fontSize:12}}>消息</Text>
            </TouchableOpacity>
        )
       const Cancel=(
            <TouchableOpacity style={[styles.message]} onPress={this.iscancel}>
                <Text style={{fontSize:14,color:"#1a75ff"}}>取消</Text>
            </TouchableOpacity>
       )
      
        return <View style={[styles.container]}>
                {isfocused && Qrcode}
                {SearchBefore}
                {isfocused?Message:Cancel}
               
            </View>

        }
     } 
        
 const styles = StyleSheet.create({
        container : {
            backgroundColor: '#fff',
            justifyContent: 'center',
            flex: 1,
            padding: 5,
            flexDirection:'row',
            overflow:"visible"
        },
        qrcode:{
            width:36,
            height:32,
            justifyContent: 'center',
            alignItems :'center',
           marginRight:10
        },
        message:{
            width:30,
            height:32,
            justifyContent: 'center',
            alignItems :'center',
            marginLeft:10
            
        }
})


export default Search;