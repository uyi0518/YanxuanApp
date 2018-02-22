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
    ScrollView,
    FlatList,
    Animated,
} from 'react-native';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activename: '推荐区',
            TopPosition: new Animated.Value(0),
            
        }
    }
    data=[
        {
            name: '推荐区',
            key: '1'
        }, {
            name: '个性专区',
            key: '2'
        }, {
            name: '冬季专区',
            key: '3'
        }, {
            name: '居家',
            key: '4'
        }, {
            name: '配件',
            key: '5'
        }, {
            name: '服装',
            key: '6'
        }, {
            name: '电器',
            key: '7'
        }, {
            name: '洗护',
            key: '8'
        }, {
            name: '饮食',
            key: '9'
        }, {
            name: '餐厨',
            key: '10'
        }, {
            name: '文体',
            key: '11'
        }, {
            name: '特色区',
            key: '12'
        }
    ]
  
    offset=null
    critical=null
    jumpcount=null
    _onLayout=(e)=>{
        let { width, height} = e.nativeEvent.layout;
        this.offset=height % 50
        this.critical=Math.floor(height/50)-Math.floor(this.data.length/2)  //仅考虑了列表不超过2屏的情况
        this.jumpcount=this.data.length-Math.floor(height/50)
    }
    _active(name,index){
        this.setState({activename:name})
        if(index>this.critical){
            this._listRef.scrollToEnd()
            Animated.timing(                            
                this.state.TopPosition,                      
                {
                  toValue: (index-this.jumpcount) * 50+this.offset,                             
                }
              ).start();
        }else{
            this._listRef.scrollToIndex({viewPosition: 0,index:0});
            Animated.timing(                            
                this.state.TopPosition,                      
                {
                  toValue: index * 50,                             
                }
              ).start();
        }
          
        
    }
   
    _renderItem = ({item,index}) => {
       
        return (
            <View style={[styles.lable]}>
                <TouchableOpacity onPress={()=>this._active(item.name,index)}>
                    <Text
                        style={{
                        fontSize: 16,
                        color:item.name==this.state.activename?'#b4282d':'#000'
                    }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        

        return <View style={[styles.container]} >
            <View style={[styles.lables]} onLayout={this._onLayout}>
            <Animated.View style={{width:4,height:50,position:'absolute',backgroundColor:'#b4282d',left:0,top:this.state.TopPosition}}></Animated.View>
                <FlatList
                    data={this.data}
                    renderItem={this._renderItem}
                    extraData={this.state.activename}
                    showsVerticalScrollIndicator={false}
                    getItemLayout={(data,index)=>(
                        {length: 50, offset: 50 * index, index}
                        )}
                    ref={(ref) => this._listRef = ref }
                    />
            </View>
            <View style={[styles.content]}></View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff'
    },
    lables: {
        
        width: 80,
        borderColor: '#bfbfbf',
        borderRightWidth: 0.5
    },
    lable: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    }
});

export default CategoryList;