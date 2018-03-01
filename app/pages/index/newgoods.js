import React from 'react';
import {View, Text, Platform, StyleSheet,Image,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')
const imagewidth=width/3-20
const GoodsDisplay = ({goods}) => (
    <View style={[styles.container]}>
        <View style={[styles.heading]}>
        <Text style={{fontSize:16,fontWeight:'100',marginRight:10}}>{goods.title}</Text>
        <Ionicons name="ios-arrow-dropright" size={20}></Ionicons>
        </View>
        <View style={[styles.items]}>
            
           {goods.data.map((item)=>
                <View style={[styles.item]} key={item.price}>
                <Image source={{uri:item.uri}} style={{width:imagewidth,height:imagewidth}}/>
                <View style={[styles.activity]}>
                    {item.activity.length !== 0 && item.activity.map((acitem)=>
                        <Text  style={{fontSize:12,color:'#fff',backgroundColor:'#b4282d',paddingLeft:5,paddingRight:5,marginRight:5}} key={acitem}>{acitem}</Text>
                    )}
                   
                </View>
                <Text numberOfLines={2} style={{fontSize:16,paddingLeft:10,lineHeight:20}}>{item.content}</Text>
                <Text  style={{fontSize:16,paddingLeft:10,lineHeight:30,color:'#b4282d',alignSelf:'flex-start'}}>￥{item.price}</Text>
            </View>

           )}
        </View>    
    </View>
);



const styles = StyleSheet.create({
    container: {

        marginTop:10,
        backgroundColor:'#fff'

    },
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    heading:{
         flexDirection:'row',
         justifyContent: 'center',
         alignItems: 'center',
         height:50
    },
    items:{
        flexDirection:'row',
        flexWrap:'wrap',
        
        
        
    },
     item:{
         justifyContent: 'center',
         alignItems: 'center',
         borderTopWidth:0.5,
         borderColor:'#bfbfbf',
         paddingBottom:5,
         paddingLeft:10,
         paddingRight:5,
         width:'33%',
         
    },
    activity:{
        flexDirection:'row',
        height:24,
        width:'100%',
        alignItems: 'center',
        
        paddingLeft:10,
    }
});

export default GoodsDisplay;