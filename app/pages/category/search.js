import React from 'react';
import {View, StyleSheet, Text,Keyboard, Modal,TouchableWithoutFeedback, Alert,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput from 'teaset/components/SearchInput/SearchInput';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={isfocused:false,searchvalue:''}
    }
    _modal=()=>{
        
        this.setState({isfocused:true})
    }
    _cancel=()=>{
        this.setState({isfocused:false})
       
    }
    render() {
        const {isfocused,searchvalue}=this.state
        const SearchBefore = (
            <TouchableOpacity style={{flex:1}} onPress={this._modal}>
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
                    disabled
                    
                   />
            </TouchableOpacity>
           
        )
        const Cancel=(
            <TouchableOpacity style={[styles.message]} onPress={this._cancel}>
                <Text style={{fontSize:14,color:"#1a75ff"}}>取消</Text>
            </TouchableOpacity>
       )
        const Smodal=(
            <Modal  onRequestClose={() => {}} animationType='fade' visible={isfocused}>
                <View style={[styles.container]}>
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
                    autoFocus
                    
                   />
                   {Cancel}
                </View>
            </Modal>
        )
      
     
      
        return <View style={[styles.container]}>
               
                {SearchBefore}
                { Smodal}
               
            </View>

        }
     } 
        
 const styles = StyleSheet.create({
        container : {
            backgroundColor: '#fff',
            justifyContent: 'center',
            height:50,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection:'row',
            overflow:"visible",
            borderColor:'#bfbfbf',
            borderBottomWidth:1
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