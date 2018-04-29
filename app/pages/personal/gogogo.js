import React from 'react';
import {
    View,
    Text,
    
    Platform,
    TextInput,
    ScrollView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Animated,
    PanResponder
    
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window')
_width = (width - 150) / 5
numbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
const CIRCLE_SIZE = 80;

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: false,
            isbonce111:true,
            isbonce:false,
            height:50
        }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
              // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                console.log(evt.nativeEvent)
                console.log(gestureState)
              // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {
              // 最近一次的移动距离为gestureState.move{X,Y}
              console.log(evt.nativeEvent)
              console.log(gestureState.moveX)
              // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
              // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
              // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
              // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
              // 默认返回true。目前暂时只支持android。
              return true;
            }
            })
    }
    handleViewRef = ref => this.view = ref;
    handleViewRef111 = ref => this.view111 = ref;
    handleViewRef222 = ref => this.view222 = ref;
  
    bounce = () => this.view.bounce(800).then(endState => this.setState({height:0}));
    bounce111 = () => {
        // this.setState({isbonce:true})
        this.view222.zoomOutLeft(800).then(endState => this.setState({height:0}));
            
}


    render() {

        return <View style={{flex:1}}>
        <View style={[styles.container]}  >
   
        





        <TouchableOpacity onPress={()=>this.props.navigation.navigate('tototo')}>
            <Text>3333333</Text>
        </TouchableOpacity>
      









            </View>
            </View>
        
    }
}

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        width:300,
        height:500,
        backgroundColor:'red',
        position:'absolute'
    }
});

export default Cart;