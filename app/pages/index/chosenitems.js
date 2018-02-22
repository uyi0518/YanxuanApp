import React from 'react';
import {View, Text, Platform, StyleSheet,Image,Dimensions,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')
const imagewidth=width-80
const imageheight=imagewidth/1.8

const ChosenItems = (props) => (
    <View style={[styles.container]}>
        <View style={[styles.heading]}>
        <Text style={{fontSize:16,fontWeight:'100',marginRight:10}}>专题精选</Text>
        <Ionicons name="ios-arrow-dropright" size={20}></Ionicons>
        </View>
        <ScrollView contentContainerStyle={[styles.items]} horizontal bounces showsHorizontalScrollIndicator={false}>
            <View style={{width:imagewidth,marginRight:20}}>
                <Image source={{uri:'https://yanxuan.nosdn.127.net/36ecdd506acc915789e127a8439b5ab7.jpg'}} style={{width:imagewidth,height:imageheight}}/>
                <View style={[styles.item]}>
                    <Text style={{fontSize:18,width:200}} numberOfLines={1}>风袅桃花，花落杯盘</Text>
                    <Text style={{fontSize:16,color:'#b4282d',flex:1,textAlign:'right'}}>6元起</Text>
                </View>
                <Text style={{fontSize:14,color:'#bfbfbf'}}>严选原创设计 风袅桃溪系列首发</Text>
            </View>
              <View style={{width:imagewidth,marginRight:20}}>
                <Image source={{uri:'https://yanxuan.nosdn.127.net/36ecdd506acc915789e127a8439b5ab7.jpg'}} style={{width:imagewidth,height:imageheight}}/>
                <View style={[styles.item]}>
                    <Text style={{fontSize:18,width:200}} numberOfLines={1}>风袅桃花，花落杯盘</Text>
                    <Text style={{fontSize:16,color:'#b4282d',flex:1,textAlign:'right'}}>6元起</Text>
                </View>
                <Text style={{fontSize:14,color:'#bfbfbf'}}>严选原创设计 风袅桃溪系列首发</Text>
            </View>
               <View style={{width:imagewidth,marginRight:20}}>
                <Image source={{uri:'https://yanxuan.nosdn.127.net/36ecdd506acc915789e127a8439b5ab7.jpg'}} style={{width:imagewidth,height:imageheight}}/>
                <View style={[styles.item]}>
                    <Text style={{fontSize:18,width:200}} numberOfLines={1}>风袅桃花，花落杯盘</Text>
                    <Text style={{fontSize:16,color:'#b4282d',flex:1,textAlign:'right'}}>6元起</Text>
                </View>
                <Text style={{fontSize:14,color:'#bfbfbf'}}>严选原创设计 风袅桃溪系列首发</Text>
            </View>

           
        </ScrollView>    
    </View>
);



const styles = StyleSheet.create({
    container: {

        marginTop:10,
        backgroundColor:'#fff',
        paddingBottom:10
    },
    
    heading:{
         flexDirection:'row',
         justifyContent: 'center',
         alignItems: 'center',
         height:50
    },
    items:{
        flexDirection:'row',
        paddingLeft:15,
        
        
        
        
    },
     item:{
         flexDirection:'row',
         alignItems: 'center',
         height:30
         
    },
    
});

export default ChosenItems;